import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function CursorSystem() {
  const reduceMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("");

  useEffect(() => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const move = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement;
      setLabel(target.closest("a, button, [data-cursor]")?.getAttribute("data-cursor") || "");
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [reduceMotion]);

  if (reduceMotion) return null;
  return <div className={`cursor-system ${label ? "is-active" : ""}`} style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }} aria-hidden="true">{label}</div>;
}
