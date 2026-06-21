import { useState, useEffect } from "react";
import { Dimensions } from "./types";

export function useResponsiveRadius() {
  const [dimensions, setDimensions] = useState<Dimensions & { isMobile: boolean }>(() => {
    // Default safe initial state for Desktop
    return {
      width: 700,
      height: 700,
      radius: 240,
      centerX: 350,
      centerY: 350,
      nodeWidth: 150,
      nodeHeight: 72,
      centerNodeSize: 200,
      isMobile: false,
    };
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setDimensions({
          width: 350,
          height: 280,
          radius: 120,
          centerX: 175,
          centerY: 90,
          nodeWidth: 150,
          nodeHeight: 72,
          centerNodeSize: 170,
          isMobile: true,
        });
      } else if (w < 1024) {
        // Tablet
        setDimensions({
          width: 550,
          height: 550,
          radius: 180,
          centerX: 275,
          centerY: 275,
          nodeWidth: 140,
          nodeHeight: 66,
          centerNodeSize: 170,
          isMobile: false,
        });
      } else {
        // Desktop
        setDimensions({
          width: 700,
          height: 700,
          radius: 240,
          centerX: 350,
          centerY: 350,
          nodeWidth: 150,
          nodeHeight: 72,
          centerNodeSize: 200,
          isMobile: false,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}
