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
      if (w < 400) {
        // Small phone — compact radial diagram
        setDimensions({
          width: 340,
          height: 340,
          radius: 122,
          centerX: 170,
          centerY: 170,
          nodeWidth: 100,
          nodeHeight: 44,
          centerNodeSize: 110,
          isMobile: false,
        });
      } else if (w < 640) {
        // Medium phone
        setDimensions({
          width: 380,
          height: 380,
          radius: 140,
          centerX: 190,
          centerY: 190,
          nodeWidth: 110,
          nodeHeight: 48,
          centerNodeSize: 120,
          isMobile: false,
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
