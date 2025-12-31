import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Make sure you put kuromi.gif and babyme.jpg in src/assets/
import KuromiGif from "../assets/kuromi.gif";
import BabyMe from "../assets/babyme.png";

export default function Login() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [insideCard, setInsideCard] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    const value = name.toLowerCase().trim();
    const validNames = ["kath", "katkat", "kathleen"];
    const blockedNames = ["she", "sheshe", "francine", "chin"];

    if (validNames.includes(value)) {
      navigate("/anniversary");
    } else if (blockedNames.includes(value)) {
      setError("maghanap ka ng jowa mo 😤");
    } else {
      setError("???");
    }
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!insideCard) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [insideCard]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1b0b2e] via-[#3b1366] to-[#7c3aed] px-4 relative overflow-hidden">
      
      {/* cursor heart as image */}
      <img
        src={BabyMe}
        alt="heart cursor"
        className="absolute w-8 h-8 pointer-events-none transition-all"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* glowing background blur */}
      <div className="absolute w-[420px] h-[420px] bg-purple-500/30 rounded-full blur-[120px]"></div>

      {/* glass card */}
      <div
        className="relative w-full max-w-md rounded-[2.5rem] bg-white/15 backdrop-blur-2xl border border-white/20 shadow-[0_0_60px_rgba(168,85,247,0.45)] p-10 flex flex-col items-center"
        onMouseEnter={() => setInsideCard(true)}
        onMouseLeave={() => setInsideCard(false)}
      >
        <h1 className="text-center text-5xl font-['Dancing_Script'] text-white drop-shadow-lg">
          Hi Mahal!
        </h1>

        {/* kuromi.gif */}
        <img
          src={KuromiGif}
          alt="kuromi"
          className="mt-4 w-32 h-32 object-contain"
        />

        <p className="text-center mt-3 text-purple-200">
          hmmmm, is this really you?
        </p>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => { setName(e.target.value); setError(""); }}
          className="mt-8 w-full rounded-full bg-white/90 px-6 py-3 text-purple-900 placeholder-purple-400 outline-none focus:ring-4 focus:ring-purple-400/40 transition"
        />

        {error && (
          <p className="mt-3 text-center text-pink-300 animate-pulse">
            {error}
          </p>
        )}

        <button
          onClick={handleContinue}
          className="mt-8 w-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 py-3 text-lg font-semibold text-white shadow-lg hover:scale-[1.05] hover:shadow-pink-500/50 active:scale-95 transition-all"
        >
          Continue
        </button>

        <p className="mt-6 text-center text-sm text-purple-200 italic">
          “Only my love can enter here.”
        </p>
      </div>
    </div>
  );
}
