import { useState } from "react";
import { useNavigate } from "react-router-dom";

const reasons = [
  ["Your Strength", "All the challenges you had, yet you never gave up."],
  ["Your Smile/Laugh", "It always brightens my day, even at my worst."],
  ["Your Support", "You always believe in me."],
  ["Your Love", "It feels like home."],
  ["Your Face", "Ikaw na yan eh."],
  ["You", "You always make my day."],
];

export default function Reasons() {
  const navigate = useNavigate();
  const [opened, setOpened] = useState([]);

  const toggle = (i) => {
    if (!opened.includes(i)) {
      setOpened([...opened, i]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2a0a4f] via-[#5b21b6] to-[#a855f7] text-white px-4 py-10">
      
      <h1 className="text-center text-4xl mb-10 font-['Dancing_Script']">
        Some reasons kung paano mo ko na-gayuma 💜
      </h1>

      {/* CENTERED LIST */}
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        {reasons.map(([title, text], i) => {
          const isOpen = opened.includes(i);

          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              className={`
                self-center
                inline-flex items-center gap-2
                rounded-full cursor-pointer select-none
                border border-white/25
                bg-white/15 backdrop-blur-lg
                px-4 py-2
                shadow-lg
                overflow-hidden whitespace-nowrap
                transition-all duration-500 ease-out
                hover:bg-white/20
                ${isOpen ? "max-w-[900px]" : "max-w-[220px]"}
              `}
            >
              {/* HEART */}
              <span
                className={`text-lg transition-colors duration-300 ${
                  isOpen ? "text-purple-300" : "text-white"
                }`}
              >
                {isOpen ? "💜" : "🤍"}
              </span>

              {/* TITLE */}
              <span className="font-semibold text-sm sm:text-base">
                {title}
              </span>

              {/* SLIDING TEXT */}
              <span
                className={`
                  ml-2 text-sm text-purple-100
                  transition-all duration-500 ease-out
                  ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
                `}
              >
                {isOpen && `– ${text}`}
              </span>
            </div>
          );
        })}
      </div>

      {/* UNLOCK BUTTON */}
      {opened.length === reasons.length && (
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/home")}
            className="rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 px-12 py-3 text-lg font-semibold text-white shadow-xl hover:scale-105 transition"
          >
            Unlock Me 💕
          </button>
        </div>
      )}
    </div>
  );
}
