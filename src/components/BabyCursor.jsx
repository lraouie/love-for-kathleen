import { useEffect, useState } from "react";
import BabyMe from "../assets/babyme.png";

export default function BabyCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <img
      src={BabyMe}
      alt="baby cursor"
      className="pointer-events-none fixed z-[9999] w-8 h-8 transition-transform duration-75"
      style={{
        left: pos.x + 8,
        top: pos.y + 8,
      }}
    />
  );
}
