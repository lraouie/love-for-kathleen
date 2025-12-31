import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BabyMe from "../assets/babyme.png";

const icons = ["💜", "💜", "❤️", "❤️", "✨", "✨", "🌸", "🌸", "⭐", "⭐", "🥰", "🥰"];

export default function Game() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  
  useEffect(() => {
    setCards([...icons].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (e.touches) {
        setPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      } else {
        setPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
    };
  }, []);

  const flip = (i) => {
    if (flipped.length === 2 || flipped.includes(i) || matched.includes(i)) return;
    setFlipped([...flipped, i]);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      const [a, b] = flipped;
      if (cards[a] === cards[b]) {
        setMatched((prev) => [...prev, a, b]);
      }
      setTimeout(() => setFlipped([]), 700);
    }
  }, [flipped, cards]);

  const finished = matched.length === cards.length && cards.length > 0;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2a0a4f] via-[#5b21b6] to-[#a855f7] text-white px-4 relative overflow-hidden">
      
      {/* babyme follower */}
      <img
        src={BabyMe}
        alt="babyme"
        className="absolute w-7 h-7 pointer-events-none opacity-60 animate-pulse"
        style={{ left: pos.x + 10, top: pos.y + 10 }}
      />

      {/* glowing blur */}
      <div className="absolute w-[420px] h-[420px] bg-purple-500/30 rounded-full blur-[120px]" />

      {/* game card */}
      <div className="relative bg-white/15 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-[0_0_60px_rgba(168,85,247,0.45)] p-8 max-w-md w-full">
        <h2 className="text-center text-3xl font-['Dancing_Script'] mb-2">
          Let’s play a little game 💕
        </h2>
        <p className="text-center text-purple-200 mb-6">
          Match all the pairs to continue
        </p>

        <div className="grid grid-cols-4 gap-4 place-items-center">
          {cards.map((icon, i) => {
            const isOpen = flipped.includes(i) || matched.includes(i);
            return (
              <button
                key={i}
                onClick={() => flip(i)}
                className={`w-16 h-16 rounded-2xl text-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                  isOpen
                    ? "bg-white text-purple-700 scale-105"
                    : "bg-purple-900/60 text-purple-200 hover:scale-105"
                }`}
              >
                {isOpen ? icon : "?"}
              </button>
            );
          })}
        </div>

        {finished && (
          <p className="mt-6 text-center text-pink-300 animate-pulse">
            Yay! You did it, love 💜
          </p>
        )}

        <button
          disabled={!finished}
          onClick={() => navigate("/reasons")}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 py-3 text-lg font-semibold text-white shadow-lg disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.05] transition"
        >
          Next 💌
        </button>
      </div>
    </div>
  );
}
