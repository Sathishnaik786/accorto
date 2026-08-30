# Global Animation System — Accorto Technologies
# Enterprise Motion Architecture & Guidelines

Accorto Technologies uses a unified, production-grade, globally integrated motion system built upon **React Bits source components**, **Framer Motion 12**, and **Tailwind CSS v4** tokens.

---

## 1. The 3-Tier Motion Hierarchy

All animations across the website are strictly classified into one of three tiers to ensure performance, visual calm, and enterprise polish:

| Tier | Scope / Use Cases | Duration Range | Easing | Example Elements |
| :--- | :--- | :--- | :--- | :--- |
| **Micro** | Buttons, icons, links, inputs, badges | **150–250ms** | `[0.16, 1, 0.3, 1]` | Button hover `scale: 1.02`, arrow slide `3px`, theme switch icon rotation |
| **Component** | Cards, dropdowns, modals, section reveals | **300–500ms** | `[0.16, 1, 0.3, 1]` | Mega-menu panel `0.22s`, modal scale `0.3s`, card elevation `-3px` |
| **Cinematic** | Hero entrance sequences, page transitions | **600–900ms** | `[0.16, 1, 0.3, 1]` | Page transition `0.38s`, hero entrance `0.55s`, video backdrop `0.9s` |

---

## 2. Core Motion Directives & Principles

### A. Selective `BorderGlow` Usage
- **Rule**: Never apply `BorderGlow` to every card in a grid.
- **Normal Cards**: Subtle hover elevation (`y: -3px`) + border color transition.
- **Featured Cards Only**: `BorderGlow` (e.g., Featured Oracle ERP practice in Bento grid, Executive Leadership cards, Popular Academy program cohorts).
- **Important CTAs**: `SpecularButton` and featured highlight boxes.

### B. Differentiated Hero Backgrounds
- **Home**: Ambient cinematic video + `ScrollExpand` NextEra section.
- **About, Academy, Case Studies, Services, Industries, Resources**: Full-viewport (`min-h-[100svh]`) interactive `DotGrid` canvas.
- **Contact**: Full-viewport (`min-h-[100svh]`) atmospheric `GhostFibers` shader with privacy & security guarantees.

### C. Standardized Hero Entrance Sequence
- **Badge / Eyebrow**: `0ms` delay
- **Main Heading**: `80ms` delay (blur fade)
- **Subtitle / Paragraph**: `180ms` delay (clean fade)
- **CTA / Interactive controls**: `280ms` delay
- **Supporting trust / visual element**: `400ms+` delay

---

## 3. Architecture Overview

```text
src/
├── config/
│   └── animations.ts              # Central motion tokens (durations, easings, distances, staggers)
├── components/
│   ├── animations/
│   │   ├── FadeContent.tsx        # React Bits blur & fade viewport reveal
│   │   ├── SplitText.tsx          # React Bits typography splitter & staggered entrance
│   │   ├── AnimatedPage.tsx       # Standard page entrance container
│   │   ├── AnimatedContainer.tsx  # Viewport scroll-reveal wrapper
│   │   ├── AnimatedCard.tsx       # Interactive card entrance & micro-elevation hover
│   │   ├── AnimatedList.tsx       # High-performance staggered list container & items
│   │   ├── AnimatedModal.tsx      # Smooth backdrop & scale modal wrapper
│   │   ├── AnimatedButton.tsx     # Micro-interaction button with loading states
│   │   ├── SpecularButton.tsx     # Apple-grade specular dynamic gleam button
│   │   ├── BorderGlow.tsx         # Selective mouse-following border glow
│   │   ├── DotGrid.tsx            # High-performance interactive particle canvas
│   │   ├── GhostFibers.tsx        # WebGL fluid fiber mesh shader
│   │   ├── WarpText.tsx           # WebGL refractive liquid glass text distortion
│   │   ├── ShinyText.tsx          # Dynamic gradient sweep shine text effect
│   │   ├── ScrollReveal.tsx       # Scroll-scrubbed word-by-word blur & rotate reveal
│   │   ├── AnimatedContent.tsx    # Directional threshold viewport content reveal & exit
│   │   ├── StarBorder.tsx         # Animated dual-gradient orbital star border outline
│   │   └── index.ts               # Barrel export





│   └── ...
└── lib/
    └── motion/                    # Core mathematical presets & custom hooks (useMouseParallax, etc.)
```

      <h1>About Us</h1>
    </AnimatedPage>
  );
}
```

### `<AnimatedContainer>`

Scroll reveal wrapper triggering view transitions once.

```tsx
import { AnimatedContainer } from "@/components/animations";

<AnimatedContainer direction="up" distance={16} delay={0.1} once>
  <FeatureSection />
</AnimatedContainer>;
```

### `<AnimatedCard>`

Subtle entrance + micro-elevation hover effect.

```tsx
import { AnimatedCard } from "@/components/animations";

<AnimatedCard delay={0.05} hoverElevation={-3}>
  <CardContent />
</AnimatedCard>;
```

### `<AnimatedList>` & `<AnimatedListItem>`

High-performance staggered list container capped at 50–80ms intervals.

```tsx
import { AnimatedList, AnimatedListItem } from "@/components/animations";

<AnimatedList stagger={0.05}>
  {items.map((item) => (
    <AnimatedListItem key={item.id}>
      <ItemCard item={item} />
    </AnimatedListItem>
  ))}
</AnimatedList>;
```

### `<AnimatedModal>`

Accessible, animated dialog container with exit transitions.

```tsx
import { AnimatedModal } from "@/components/animations";

<AnimatedModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <div className="glass-strong p-6 rounded-2xl">
    <h3>Modal Title</h3>
  </div>
</AnimatedModal>;
```

### `<AnimatedButton>`

Interactive button with micro-scale hover/tap feedback and asynchronous loading spinner states.

```tsx
import { AnimatedButton } from "@/components/animations";

<AnimatedButton
  variant="brand"
  isLoading={isSubmitting}
  loadingText="Sending inquiry..."
  onClick={handleSubmit}
>
  Submit Request
</AnimatedButton>;
```

### `<SpecularButton>`

High-end WebGL specular shine button with cursor proximity and follow-mouse ray tracking.

```tsx
import { SpecularButton } from "@/components/animations";

// Flagship Primary Hero / Navigation CTA
<SpecularButton
  to="/contact"
  size="lg"
  variant="brand"
  className="shadow-brand hover:shadow-brand-lg"
>
  Get in touch
</SpecularButton>

// Form Submit with Loading State
<SpecularButton
  type="submit"
  isLoading={isSubmitting}
  loadingText="Sending..."
  variant="brand"
  size="md"
>
  Send message
</SpecularButton>
```

## SpecularButton Usage Strategy

### Button Hierarchy

To preserve performance and executive aesthetics while delivering maximum visual punch on primary conversion actions, Accorto establishes a strict 3-tier button hierarchy:

| Tier | Classification | Component | Target Use Cases |
|---|---|---|---|
| **Tier 1** | **Premium / Flagship CTAs** | `<SpecularButton>` | Hero primary CTA ("Get in touch"), Navbar primary CTA ("Get Started"), FinalCTA banner ("Book Free Consultation"), Form submissions ("Send message"), Major course/program CTAs |
| **Tier 2** | **Interactive Actions** | `<AnimatedButton>` | Secondary form actions, modal confirms, interactive tabs with motion feedback |
| **Tier 3** | **High-Frequency & Utility** | `<Button>` / Standard | Category filters, pagination, table row actions, dropdown triggers, theme toggles, search modals, breadcrumbs |

### Performance Limits

1. **Max 1–3 `<SpecularButton>` instances per page**: WebGL canvas contexts are reserved strictly for high-impact primary conversion points.
2. **Never use WebGL buttons in repeated lists/grids**: For repeating cards or tables, use standard `<Button>` or `<AnimatedButton>`.
3. **Automatic DPR Clamping**: Canvas pixel ratio is clamped to `Math.min(window.devicePixelRatio, 2)` to prevent excessive GPU strain on high-DPI displays.
4. **Context Cleanup**: On unmount, WebGL extensions (`WEBGL_lose_context`) and RAF loops are immediately terminated.

### Mobile & Touch Handling

- On mobile touch screens, cursor follow is gracefully bypassed, falling back to gentle diagonal specular framing.
- Full touch targets (`min-height: 44px` for md/lg) and flex layouts are guaranteed.

### Reduced-Motion Behavior

- When `prefers-reduced-motion: reduce` is detected:
  - Continuous WebGL `requestAnimationFrame` loop is disabled.
  - Pointer tracking listeners are not registered.
  - A single static specular highlight frame is rendered without motion.
  - Button remains 100% visible, accessible, and functional.

### `<LoadingAnimation>` & `<SkeletonShimmer>`

```tsx
import { LoadingAnimation, SkeletonShimmer } from "@/components/animations";

// Animated Spinner
<LoadingAnimation size="md" label="Loading data..." />

// Skeleton Shimmer
<SkeletonShimmer className="h-6 w-48 rounded-md" />
```

---

## 4. ScrollExpand

### Purpose & Architecture

`ScrollExpand` is a hero-grade cinematic transition component adapted from the official React Bits `ScrollExpand-JS-CSS` registry specification. It renders a rounded visual frame that expands to full bleed as the user scrolls down through the viewport, revealing enterprise technology narrative layers and conversion actions.

```tsx
import { ScrollExpand } from "@/components/animations";
import { SpecularButton } from "@/components/animations/SpecularButton";

<ScrollExpand
  src="/card_1.jpg"
  alt="Accorto enterprise cloud architecture"
  title="Ready to Ship."
  scrollHint="Scroll to enter next era"
  useWindowScroll
  startWidth={42}
  startHeight={56}
  startRadius={24}
  endRadius={0}
  mediaZoom={1.25}
  scrollDistance={1.1}
  holdDistance={0.35}
  smoothing={0.1}
  overlayScrim={0.55}
>
  <div className="text-center space-y-4">
    <h2>Built for what comes next.</h2>
    <p>From architecture to production, Accorto turns ambitious ideas into scalable digital experiences.</p>
    <SpecularButton to="/contact" variant="brand">Start Your Transformation</SpecularButton>
  </div>
</ScrollExpand>
```

### Props Reference

| Prop | Type | Default | Description |
|---|---|---|---|
| `src` | `string` | `""` | Image or video media source URL |
| `mediaType` | `"image" \| "video"` | `"image"` | Media element type |
| `poster` | `string` | `""` | Video poster placeholder |
| `alt` | `string` | `""` | Accessible image description |
| `title` | `string` | `""` | Initial overlay title displayed before expansion |
| `scrollHint` | `string` | `""` | Bottom indicator text guiding the user to scroll |
| `startWidth` | `number` | `42` | Initial frame width percentage (0–100) |
| `startHeight` | `number` | `58` | Initial frame height percentage (0–100) |
| `startRadius` | `number` | `24` | Initial corner radius in pixels |
| `endRadius` | `number` | `0` | Final corner radius at full expansion |
| `mediaZoom` | `number` | `1.35` | Initial media scale zoom (eases to 1.0) |
| `scrollDistance`| `number` | `1.2` | Scroll span factor relative to stage height |
| `holdDistance` | `number` | `0.35` | Hold distance after full expansion |
| `smoothing` | `number` | `0.1` | RAF interpolation smoothing factor |
| `overlayScrim` | `number` | `0.45` | Darkness opacity of backdrop scrim |
| `useWindowScroll` | `boolean` | `false` | When `true`, uses natural window scroll |
| `enabled` | `boolean` | `true` | Enables or disables the scroll calculation |

### SSR & Reduced Motion

- **SSR Safety**: All browser globals (`window`, `ResizeObserver`, `requestAnimationFrame`, `matchMedia`) are isolated strictly to client `useEffect` hooks. Default markup renders semantic HTML with zero hydration mismatches.
- **Reduced Motion**: When `prefers-reduced-motion: reduce` is enabled, RAF smoothing loops are completely disabled. Progress tracks the scroll position directly and instantly without motion blur or interpolation delay.
- **Performance Rule**: Exactly **1 primary ScrollExpand instance** is used across the home page to preserve smooth 60fps scrolling and eliminate redundant layout calculations.

---

## 5. BorderGlow — Global Card Treatment

The **`BorderGlow`** component from React Bits provides an interactive glowing-edge treatment that responds to pointer proximity and angle. When a pointer approaches the card edge, a directional mesh gradient follows the cursor and highlights the perimeter with Accorto brand cyan, emerald, and electric blue tones.

### Global Integration Strategy

1. **Shared Card Primitives**: `BorderGlow` is integrated at the shared card abstraction level (`src/components/ui/PremiumCard.tsx` and `src/components/ui/card.tsx`). This automatically applies interactive edge lighting to all cards across:
   - **Home Page**: Service practice cards, ERP spotlight, bento cards, testimonial cards, client result cards.
   - **Services Route**: Practice feature cards, delivery process cards, technology stack cards, architecture cards.
   - **Industries Route**: Industry transformation cards and capability cards.
   - **Case Studies Route**: Transformation blueprint cards, ROI cards, and case study cards.
   - **Insights / Blog Route**: Flagship article cards, category cards, and article grid cards.
   - **Academy Routes**: Course syllabus cards, track overview cards, cohort feature cards, and statistics cards.
   - **About Route**: Mission/Vision cards, core value cards, leadership profile cards, and process cards.
2. **Preset Defaults (`ACCORTO_BORDER_GLOW_PRESET`)**:
   - `animated`: **`false`** by default across all cards (avoids continuous RAF intro sweep loops across dozens of grid cards).
   - `glowColor`: `"185 95 65"` (cyan-emerald ambient glow matching Accorto's brand palette).
   - `colors`: `["#00D9FF", "#70FF4A", "#38BDF8"]` (Accorto cyan, neon accent green, and electric sky blue).
   - `borderRadius`: `24` (matches standard card corner radius).
   - `glowRadius`: `36` (restrained, crisp outer glow).
   - `edgeSensitivity`: `30` (natural proximity detection threshold).
   - `coneSpread`: `25` (focused directional cone following the cursor).
   - `fillOpacity`: `0.35` (subtle inner mesh gradient illumination).

### Usage

```tsx
import { BorderGlow } from "@/components/animations";

<BorderGlow borderRadius={24} className="h-full">
  <div className="glass rounded-3xl p-6 h-full">
    <h3>Card Title</h3>
    <p>Card description and interactive content.</p>
  </div>
</BorderGlow>
```

### Performance & Architectural Rules

1. **Direct CSS Custom Property Updates**: Pointer tracking calculates local element coordinates inside `onPointerMove` and updates `--edge-proximity` and `--cursor-angle` directly via `card.style.setProperty`. This eliminates React state updates and component re-renders during mouse movement.
2. **No Global Mousemove Listeners**: Cards track pointer events locally (`onPointerMove` / `onPointerLeave`). Inactive or offscreen cards consume zero CPU cycles.
3. **Pointer Events Isolation**: Decorative layers (`.edge-light`, `::before`, `::after`) have `pointer-events: none;` to ensure all inner buttons (`SpecularButton`, links, inputs) remain 100% interactive and clickable.
4. **Reduced Motion**: Respects `prefers-reduced-motion: reduce` by disabling transitions while keeping the static border and card content crisp and usable.
5. **Non-Card Exclusion**: `BorderGlow` is strictly applied to card surfaces. Utility buttons, navigation bars, dropdowns, inputs, tabs, and modals do NOT use `BorderGlow`.

---

## 6. GhostFibers — Contact Page Background

The **`GhostFibers`** component from React Bits creates a deep recursive fiber field powered by WebGL/OGL with luminous bands, radial twisting, and atmospheric glow. It serves as the primary ambient background for the Contact hero section.

### Contact Page Integration

- **Target Placement**: Positioned behind the Contact hero / header in `src/routes/contact.tsx` (`<PageHero background={...} />`).
- **Layering Architecture**: Placed with `z-0`, `pointer-events-none`, and `aria-hidden="true"`, ensuring the WebGL canvas never intercepts user clicks or form interactions.
- **Accorto Brand Colors**:
  - `lineColor`: `"#0B1736"` (deep enterprise navy)
  - `glowColor`: `"#2563EB"` (Accorto electric royal blue)
- **Restrained Parameters**:
  - `fps`: `30` (capped frame rate for smooth ambient motion without GPU thrashing)
  - `dpr`: `1` (clamped device pixel ratio for mobile and desktop efficiency)
  - `layers`: `4` (lightweight fiber structure)
  - `speed`: `0.12` / `rotationSpeed`: `0.08` (slow, subtle atmospheric drifting)
  - `vignette`: `0.9` / `brightness`: `1.4` / `blueBoost`: `1.15`
  - `grain`: `0.025` (subtle film texture)

### Usage

```tsx
import { GhostFibers } from "@/components/animations";

<div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
  <GhostFibers
    lineColor="#0B1736"
    glowColor="#2563EB"
    speed={0.12}
    scale={2.2}
    layers={4}
    fps={30}
    dpr={1}
  />
  {/* Scrim overlay for text legibility */}
  <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/10 to-background pointer-events-none" />
</div>
```

### Lifecycle & Performance Controls

1. **IntersectionObserver**: Automatically stops WebGL render loops when the Contact hero is scrolled out of the viewport.
2. **Page Visibility**: Automatically pauses rendering when the browser tab is hidden or backgrounded (`document.addEventListener("visibilitychange")`).
3. **Reduced Motion**: Disables animation loops and renders a single static frame when `prefers-reduced-motion: reduce` is active.
4. **Context Cleanup**: Disconnects all observers, removes listeners, detaches canvas, and releases WebGL context (`WEBGL_lose_context`) on unmount.
5. **WebGL Fallback**: Gracefully handles devices without WebGL 2 support without throwing unhandled exceptions.

---

# Full-Bleed Page Hero Backgrounds

The **`DotGrid`** component from React Bits renders a canvas-based interactive grid of dots with cursor proximity illumination, physical spring inertia, and click shockwave disturbances. It serves as the global standard full-bleed background for all non-landing, non-contact hero sections.

### Architecture & Responsibility Model

> **Global Hero Standard**: Standard page heroes use a full-bleed DotGrid background. The hero owns the dimensions and the DotGrid fills the hero using absolute inset positioning. Content remains inside the existing constrained container.

1. **Hero Root (`<section className="relative overflow-hidden w-full min-h-screen flex flex-col justify-center">`)**: Owns the master positioning context and commands a full-viewport presence (`min-h-screen`). Content is vertically balanced, ensuring the entire initial screen is filled by the hero surface with zero empty bottom gap.
2. **Background Layer (`<div className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none">`)**: Sits outside the constrained content container at `absolute inset-0`, guaranteeing 100% full-bleed coverage across the entire viewport width and full viewport height from top padding behind the navbar to bottom padding.
3. **Hero Content Layer (`<div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6">`)**: Centered and max-width constrained for optimal typography readability and layout structure.
4. **Hero Boundary & Next Section**: The DotGrid ends cleanly at the bottom boundary of the hero section. When the user scrolls down, the next section enters smoothly with its own distinct background.

### Global Hero Matrix

| Route | Page | Hero Background | Notes |
|---|---|---|---|
| `/` | **Home / Landing** | Existing Landing Animation | Flagship video hero + `ScrollExpand` (Strictly Excluded) |
| `/contact` | **Contact** | `GhostFibers` | WebGL blue fiber field exclusively (Strictly Excluded) |
| `/academy` | **Academy Index** | Full-Bleed `DotGrid` | **Primary Reference Standard**: Badge, title, subtitle & CTAs |
| `/academy/ai-training` | **AI Training** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/academy/corporate-training` | **Corporate Training** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/academy/generative-ai` | **Generative AI** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/academy/ai-agents` | **AI Agents** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/academy/rag` | **RAG Systems** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/academy/prompt-engineering` | **Prompt Engineering** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/academy/python-for-ai` | **Python for AI** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/academy/deep-learning` | **Deep Learning** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/academy/mcp` | **Model Context Protocol** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/about` | **About** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/services` | **Services** | Full-Bleed `DotGrid` | Full-bleed hero with practice pills |
| `/industries` | **Industries** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/careers` | **Careers** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/case-studies` | **Case Studies** | Full-Bleed `DotGrid` | Full-bleed hero container |
| `/insights` | **Insights & Research** | Full-Bleed `DotGrid` | Editorial full-bleed hero wrapper |

### Usage

```tsx
import { PageHero } from "@/components/page-hero";

<PageHero
  tag="Academy"
  title="Master AI Engineering & Software Development"
  subtitle="Industry-ready training programs designed and delivered by active enterprise engineers."
  backgroundEffect="dot-grid"
>
  {/* CTA buttons rendered inside the full-bleed DotGrid hero */}
</PageHero>
```

### Performance & Accessibility Controls

1. **Full Hero Positioning Context**: Positioned as `absolute inset-0 z-0 h-full w-full` inside the relative hero section container, ensuring the dot canvas automatically tracks and stretches from the top padding to the bottom padding of the hero without fixed height constraints (`h-screen`, `600px`).
2. **Edge-to-Edge Dot Generation**: Grid generation loops from `x = -1` to `cols` and `y = -1` to `rows`, guaranteeing zero blank margin strips across all viewports and responsive heights.
3. **Pure Canvas Rendering**: All dot calculations and color interpolations execute directly on a single `<canvas>` element with zero React component re-renders on cursor movement.
4. **Pointer Transparency**: Canvas container has `pointer-events: none;` and `aria-hidden="true"`, ensuring all hero text, CTAs, buttons, and links remain completely interactive.
5. **Reduced Motion**: When `prefers-reduced-motion: reduce` is detected, the continuous RAF loop is canceled and a single static dot grid is rendered.
6. **Lifecycle Cleanup**: Cleans up animation frames, removes global throttled listeners, and disconnects `ResizeObserver` on unmount.

---

## 8. Reduced Motion & Accessibility

All components unconditionally respect `prefers-reduced-motion`:

- Transforms (`translateY`, `scale`, `rotate`) are set to `0` or disabled.
- Blurs and heavy filter animations are bypassed.
- Looping background animations are stopped.
- Stagger delays are minimized.
- Content remains **100% visible and interactive immediately**.
- Focus management and keyboard accessibility are never blocked by animations.

---

## 9. SSR & Hydration Safety

Because Accorto uses **TanStack Start**:

1. Initial markup is rendered identically on server and client.
2. Viewport observers are attached during client hydration without causing layout shifts or hydration mismatch errors.
3. Content is never hidden with CSS `display: none` or opacity `0` without a fallback if JavaScript is disabled.

---

## 10. Performance Guidelines for Future Development

1. **Max 2–3 major effects per viewport**: Keep pages clean, crisp, and executive-ready.
2. **Stick to GPU-accelerated properties**: Animate only `opacity` and `transform` (`x`, `y`, `scale`).
3. **Never animate layout properties**: Do not animate `width`, `height`, `margin`, `padding`, or `top/left`.
4. **Always set `once: true` on scroll reveals**: Prevent recurring re-triggers when users scroll back and forth.
5. **Cap staggers**: Keep list stagger intervals under `80ms` (0.08s) to avoid delaying user interactions on long lists.

---

## 11. Center Flow — Enterprise Intelligence Layer

The **Center Flow** (`@reactbits-starter/center-flow-tw`) component is a signature radial enterprise architecture visualization that communicates how Accorto connects AI, cloud, ERP, analytics, and data platforms through a central intelligence layer.

### Purpose & Placement
- **Location**: Homepage (`src/components/ecosystem/EcosystemSection.tsx` on `/`).
- **Concept**: Radial outward flow of enterprise intelligence from the central Accorto node to surrounding enterprise systems.
- **Center Node**: `ACCORTO` title with `INTELLIGENCE LAYER` subtitle on a frosted glass spherical node with ambient cyan/blue backlighting.
- **Outer Nodes**: `OpenAI`, `Google Cloud`, `Azure`, `AWS`, `SAP`, `Oracle`, and `Power BI` formatted as glass pill badges with partner logos and custom brand glow accents.

### Visual & Motion Strategy
- **Palette**: Deep Accorto Navy (`#061426` / `#0C223D`), Primary Cyan (`#00D9FF`), Secondary Blue (`#168CFF`), Teal (`#18D8C5`), and partner brand colors.
- **Radial Pulse Flow**: Traveling laser beams emanate from the central node along multi-tier SVG gradient vectors with coordinated wave offsets and high-frequency data sparks.
- **Interactive Highlighting**: Hovering over any technology node elevates it (`y: -3px`, `scale: 1.06`), triggers its brand glow halo, and illuminates its connection path while gently dimming background connections.
- **Scroll & Parallax Integration**: Staggered scroll parallax (background orbit rings at `0.05x`, center node at `0.10x`, outer nodes at `0.14x`) with cinematic viewport entrance (`opacity: 0.2 → 1`, `scale: 0.92 → 1`, `y: 40px → 0px`).
- **Reduced Motion**: Full compliance with `prefers-reduced-motion: reduce`. Continuously looping pulse beads and parallax offsets are neutralized, keeping connection lines and technology nodes static, crisp, and accessible.
- **Responsive Scaling**: Dynamically adjusts diagram radius and node dimensions across desktop (245px radius), tablet (188px radius), and mobile (124–144px radius) without layout overlap or horizontal overflow.
- **SSR Safety**: Fully isolated client hooks and hydration-safe rendering for TanStack Start.
