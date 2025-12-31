import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// optional heart background
import HeartImg from "../assets/babyme.png";

export default function Anniversary() {
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const navigate = useNavigate();

  // Heart follows cursor for floating effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#3b0b66] via-[#6a1bb7] to-[#a855f7] relative overflow-hidden px-4">
      
      {/* Heart following cursor */}
      <img
        src={HeartImg}
        alt="floating heart"
        className="absolute w-6 h-6 pointer-events-none opacity-50 animate-pulse transition-all"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* glowing blur */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[120px]"></div>

      {/* Glass card */}
      <div className="relative w-full max-w-md rounded-[2.5rem] bg-white/15 backdrop-blur-2xl border border-white/20 shadow-[0_0_60px_rgba(168,85,247,0.45)] p-10 flex flex-col items-center">
        <h1 className="text-4xl font-['Dancing_Script'] text-white drop-shadow-lg text-center">
          Welcome, Mahal!! 💜
        </h1>
        <p className="text-purple-200 mt-3 text-center">Kailan mo ko sinagot? hihi</p>

        <input
          type="date"
          className="mt-6 w-full rounded-full bg-white/90 px-6 py-3 text-purple-900 placeholder-purple-400 outline-none focus:ring-4 focus:ring-purple-400/40 transition duration-300"
          onChange={(e) => { setDate(e.target.value); setError(false); }}
        />

        {error && (
          <p className="mt-3 text-center text-pink-300 animate-pulse">
            Hays......
          </p>
        )}

        <button
          onClick={() => date === "2020-07-27" ? navigate("/game") : setError(true)}
          className="mt-8 w-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 py-3 text-lg font-semibold text-white shadow-lg hover:scale-[1.05] hover:shadow-pink-500/50 active:scale-95 transition-all"
        >
          Unlock 💕
        </button>

        <p className="mt-6 text-center text-sm text-purple-200 italic">
          “Pag 'yan di mo pa alam!”
        </p>
      </div>
    </div>
  );
}
