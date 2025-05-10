import useMousePosition from "../hooks/usePointer";
import { MouseContext } from "../context/mouse-context";
import { useContext, useEffect, useState } from "react";

const DotRing = () => {
  const { cursorType }: any = useContext(MouseContext);
  const { x, y } = useMousePosition();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile || x === null || y === null) return null;

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[999]">
      {/* Ring */}
      <div
        style={{
          transform: `translate3d(${x - 5}px, ${y - 12}px, 0)`,
          border: "10px solid #00F5A0",
        }}
        className={`w-4 h-4 rounded-full transition-transform duration-[40ms] ${cursorType}`}
      />

      {/* Dot */}
      {/* <div
        style={{
          transform: `translate3d(${x - 3}px, ${y - 3}px, 6)`,
          backgroundColor: "#00F5A0",
        }}
        className={`w-[6px] h-[6px] rounded-full transition-transform duration-[40ms] ${cursorType}`}
      /> */}
    </div>
  );
};

export default DotRing;
