import React, { useRef, useEffect, forwardRef } from "react";
import { Link } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { Renderer, Program, Mesh, Triangle, Color } from "ogl";
import { SPECULAR_PRESETS } from "@/config/animations";
import "./SpecularButton.css";

const PAD = 20;

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2 uCenter;
uniform vec2 uHalfSize;
uniform float uRadius;
uniform float uAngle;
uniform float uPx;
uniform vec3 uLineColor;
uniform vec3 uBaseColor;
uniform float uIntensity;
uniform float uShineSize;
uniform float uShineFade;
uniform float uThickness;
uniform float uBaseWidth;

out vec4 fragColor;

float sdRoundedRect(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

float shapeSDF(vec2 p) { return sdRoundedRect(p, uHalfSize, uRadius); }

float gaussianLine(float d, float sigma) {
  float x = d / (sigma + 1e-6);
  float k = mix(1.0, 1.6, smoothstep(0.0, 1.5, x));
  return exp(-k * x * x);
}

void main() {
  vec2 p = gl_FragCoord.xy - uCenter;
  float d = shapeSDF(p);
  vec2 L = vec2(cos(uAngle), sin(uAngle));

  // Dark base stroke hugging the edge for a sense of thickness
  float base = (1.0 - smoothstep(0.0, uBaseWidth, abs(d))) * 0.45;

  // Symmetric specular: the edges facing toward/away from the light both
  // catch a streak. The angular window (size + fade) is measured with an
  // elliptical normal so it varies continuously along straight edges.
  vec2 nEll = normalize(p / (uHalfSize * uHalfSize) + 1e-6);
  float phi = acos(clamp(abs(dot(nEll, L)), 0.0, 1.0));
  float rim = 1.0 - smoothstep(uShineSize - uShineFade, uShineSize + uShineFade + 1e-4, phi);
  float line = gaussianLine(d, uThickness);
  float edgeClamp = 1.0 - smoothstep(0.5 * uPx, 3.0 * uPx, abs(d));
  float hi = line * rim * edgeClamp * uIntensity;

  vec3 col = uBaseColor * base + uLineColor * hi;
  float a = clamp(base + hi, 0.0, 1.0);
  fragColor = vec4(col, a);
}
`;

export interface SpecularButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  children?: React.ReactNode;
  variant?: "brand" | "white" | "dark" | "custom";
  size?: "sm" | "md" | "lg";
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  to?: string;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const SpecularButton = forwardRef<HTMLButtonElement, SpecularButtonProps>(
  (
    {
      children = "Get Started",
      variant = "brand",
      size = "md",
      radius: customRadius,
      tint: customTint,
      tintOpacity: customTintOpacity,
      blur: customBlur,
      textColor: customTextColor,
      lineColor: customLineColor,
      baseColor: customBaseColor,
      intensity: customIntensity,
      shineSize: customShineSize,
      shineFade: customShineFade,
      thickness: customThickness,
      speed: customSpeed,
      followMouse = true,
      proximity = 250,
      autoAnimate: customAutoAnimate,
      disabled = false,
      isLoading = false,
      loadingText,
      onClick,
      className = "",
      type = "button",
      to,
      href,
      style,
      ...props
    },
    ref,
  ) => {
    const internalBtnRef = useRef<HTMLElement | null>(null);
    const fxRef = useRef<HTMLSpanElement>(null);

    // Merge preset with explicit overrides
    const preset = variant !== "custom" ? SPECULAR_PRESETS[variant] : SPECULAR_PRESETS.brand;
    const radius = customRadius ?? preset.radius;
    const tint = customTint ?? preset.tint;
    const tintOpacity = customTintOpacity ?? preset.tintOpacity;
    const blur = customBlur ?? preset.blur;
    const textColor = customTextColor ?? preset.textColor;
    const lineColor = customLineColor ?? preset.lineColor;
    const baseColor = customBaseColor ?? preset.baseColor;
    const intensity = customIntensity ?? preset.intensity;
    const autoAnimate = customAutoAnimate ?? (preset.autoAnimate ?? true);
    const speed = customSpeed ?? (preset.speed ?? 0.5);
    const thickness = customThickness ?? (preset.thickness ?? 1.5);
    const shineSize = customShineSize ?? (preset.shineSize ?? 14);
    const shineFade = customShineFade ?? (preset.shineFade ?? 35);

    const isDisabled = disabled || isLoading;

    const propsRef = useRef({
      radius,
      lineColor,
      baseColor,
      intensity,
      shineSize,
      shineFade,
      thickness,
      speed,
      followMouse,
      proximity,
      autoAnimate,
      isDisabled,
    });

    propsRef.current = {
      radius,
      lineColor,
      baseColor,
      intensity,
      shineSize,
      shineFade,
      thickness,
      speed,
      followMouse,
      proximity,
      autoAnimate,
      isDisabled,
    };

    useEffect(() => {
      if (typeof window === "undefined") return;

      const btn = internalBtnRef.current;
      const fx = fxRef.current;
      if (!btn || !fx) return;

      const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      let renderer: Renderer;
      try {
        renderer = new Renderer({ alpha: true, premultipliedAlpha: true, antialias: true, dpr });
      } catch {
        return;
      }

      const gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      const geometry = new Triangle(gl);
      if (geometry.attributes.uv) delete geometry.attributes.uv;

      const program = new Program(gl, {
        vertex: VERT,
        fragment: FRAG,
        uniforms: {
          uCenter: { value: [0, 0] },
          uHalfSize: { value: [1, 1] },
          uRadius: { value: 0 },
          uAngle: { value: 2.4 },
          uPx: { value: dpr },
          uLineColor: { value: [1, 1, 1] },
          uBaseColor: { value: [0.32, 0.32, 0.32] },
          uIntensity: { value: 1.5 },
          uShineSize: { value: 0.17 },
          uShineFade: { value: 0.7 },
          uThickness: { value: 1.5 },
          uBaseWidth: { value: dpr },
        },
      });

      const mesh = new Mesh(gl, { geometry, program });
      fx.appendChild(gl.canvas);

      const sizeRef = { w: 1, h: 1 };
      const resize = () => {
        const rect = btn.getBoundingClientRect();
        const w = rect.width;
        const h = rect.height;
        sizeRef.w = w;
        sizeRef.h = h;
        renderer.setSize(w + PAD * 2, h + PAD * 2);
        program.uniforms.uCenter.value = [(PAD + w / 2) * dpr, (PAD + h / 2) * dpr];
        program.uniforms.uHalfSize.value = [(w / 2) * dpr, (h / 2) * dpr];
      };
      const ro = new ResizeObserver(resize);
      ro.observe(btn);
      resize();

      let pointerAngle: number | null = null;
      let proximityT = 0;

      const onPointerMove = (e: PointerEvent) => {
        if (propsRef.current.isDisabled || isReducedMotion) return;
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
        const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
        const dist = Math.hypot(dx, dy);

        if (dist === 0) {
          const nx = (e.clientX - cx) / (rect.width / 2);
          const ny = (cy - e.clientY) / (rect.height / 2);
          pointerAngle = Math.atan2(2 / rect.height, -2 / rect.width) + nx * 0.3 + ny * 0.15;
        } else {
          pointerAngle = Math.atan2(cy - e.clientY, e.clientX - cx);
        }
        const t = Math.max(0, 1 - dist / Math.max(propsRef.current.proximity, 1));
        proximityT = t * t * (3 - 2 * t);
      };

      if (!isReducedMotion) {
        window.addEventListener("pointermove", onPointerMove);
      }

      let angle = 2.4;
      let idleAngle = 2.4;
      let bright = 1;
      let last = performance.now();
      let raf = 0;

      const lineC = new Color();
      const baseC = new Color();

      // Static single-pass render for reduced-motion
      if (isReducedMotion) {
        const p = propsRef.current;
        lineC.set(p.lineColor);
        baseC.set(p.baseColor);
        program.uniforms.uAngle.value = 2.4;
        program.uniforms.uRadius.value =
          Math.min(p.radius, Math.min(sizeRef.w, sizeRef.h) / 2) * dpr;
        program.uniforms.uLineColor.value = [lineC.r, lineC.g, lineC.b];
        program.uniforms.uBaseColor.value = [baseC.r, baseC.g, baseC.b];
        program.uniforms.uIntensity.value = p.isDisabled ? 0.3 : p.intensity * 0.9;
        program.uniforms.uShineSize.value = (p.shineSize * Math.PI) / 180;
        program.uniforms.uShineFade.value = (p.shineFade * Math.PI) / 180;
        program.uniforms.uThickness.value = p.thickness * dpr;
        renderer.render({ scene: mesh });

        return () => {
          ro.disconnect();
          if (gl.canvas.parentNode === fx) fx.removeChild(gl.canvas);
          gl.getExtension("WEBGL_lose_context")?.loseContext();
        };
      }

      const update = (now: number) => {
        raf = requestAnimationFrame(update);
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        const p = propsRef.current;

        idleAngle += p.speed * dt;
        const steer =
          p.followMouse &&
          pointerAngle != null &&
          !p.isDisabled &&
          (!p.autoAnimate || proximityT > 0);
        const target = steer && pointerAngle != null ? pointerAngle : idleAngle;
        const diff = ((target - angle + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
        angle += diff * (1 - Math.exp(-dt * 7));

        const brightTarget = p.isDisabled ? 0.2 : p.autoAnimate ? 1 : Math.max(0.7, proximityT);
        bright += (brightTarget - bright) * (1 - Math.exp(-dt * 8));

        lineC.set(p.lineColor);
        baseC.set(p.baseColor);
        program.uniforms.uAngle.value = angle;
        program.uniforms.uRadius.value =
          Math.min(p.radius, Math.min(sizeRef.w, sizeRef.h) / 2) * dpr;
        program.uniforms.uLineColor.value = [lineC.r, lineC.g, lineC.b];
        program.uniforms.uBaseColor.value = [baseC.r, baseC.g, baseC.b];
        program.uniforms.uIntensity.value = p.intensity * bright;
        program.uniforms.uShineSize.value = (p.shineSize * Math.PI) / 180;
        program.uniforms.uShineFade.value = (p.shineFade * Math.PI) / 180;
        program.uniforms.uThickness.value = p.thickness * dpr;
        renderer.render({ scene: mesh });
      };
      raf = requestAnimationFrame(update);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        if (gl.canvas.parentNode === fx) fx.removeChild(gl.canvas);
        gl.getExtension("WEBGL_lose_context")?.loseContext();
      };
    }, []);

    const customStyle: React.CSSProperties & Record<`--${string}`, string | number> = {
      "--sb-radius": `${radius}px`,
      "--sb-tint": tint,
      "--sb-tint-opacity": tintOpacity,
      "--sb-blur": `${blur}px`,
      "--sb-text-color": textColor,
      ...style,
    };

    const content = (
      <>
        <span ref={fxRef} className="specular-button__fx" aria-hidden="true" />
        <span className="specular-button__label">
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin text-current shrink-0" />
              {loadingText || children}
            </>
          ) : (
            children
          )}
        </span>
      </>
    );

    const buttonClass = `specular-button specular-button--${size} specular-button--variant-${variant}${className ? ` ${className}` : ""}`;

    // If 'to' is provided, render semantic TanStack Router Link
    if (to) {
      return (
        <Link
          ref={(node) => {
            internalBtnRef.current = node;
          }}
          to={to}
          className={buttonClass}
          style={customStyle}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : undefined}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </Link>
      );
    }

    // If 'href' is provided, render external / standard anchor
    if (href) {
      return (
        <a
          ref={(node) => {
            internalBtnRef.current = node;
          }}
          href={href}
          className={buttonClass}
          style={customStyle}
          aria-disabled={isDisabled}
          tabIndex={isDisabled ? -1 : undefined}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={(node) => {
          internalBtnRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          }
        }}
        type={type}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        onClick={onClick}
        className={buttonClass}
        style={customStyle}
        {...props}
      >
        {content}
      </button>
    );
  },
);

SpecularButton.displayName = "SpecularButton";

export default SpecularButton;
