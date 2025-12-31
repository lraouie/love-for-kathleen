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

      {/* TITLE */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl mb-10 font-['Dancing_Script'] px-2">
        Some reasons kung paano mo ko na-gayuma 💜
      </h1>

      {/* LIST */}
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        {reasons.map(([title, text], i) => {
          const isOpen = opened.includes(i);

          return (
            <div
              key={i}
              onClick={() => toggle(i)}
              className={`
                w-full
                sm:w-auto
                self-center
                flex items-start sm:items-center gap-3
                rounded-2xl sm:rounded-full
                cursor-pointer select-none
                border border-white/25
                bg-white/15 backdrop-blur-lg
                px-5 py-4 sm:py-2
                shadow-lg
                transition-all duration-500 ease-out
                hover:bg-white/20
                ${isOpen
                  ? "max-w-full sm:max-w-[720px]"
                  : "max-w-full sm:max-w-[260px]"}
              `}
            >
              {/* HEART */}
              <span
                className={`text-xl transition-colors duration-300 ${
                  isOpen ? "text-purple-300" : "text-white"
                }`}
              >
                {isOpen ? "💜" : "🤍"}
              </span>

              {/* TEXT BLOCK */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="font-semibold text-sm sm:text-base">
                  {title}
                </span>

                <span
                  className={`
                    text-sm text-purple-100
                    transition-all duration-500 ease-out
                    ${isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4 sm:translate-x-6"}
                  `}
                >
                  {isOpen && `– ${text}`}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* UNLOCK BUTTON */}
      {opened.length === reasons.length && (
        <div className="text-center mt-12 px-4">
          <button
            onClick={() => navigate("/home")}
            className="w-full sm:w-auto rounded-full
                       bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500
                       px-10 py-3 text-lg font-semibold text-white
                       shadow-xl hover:scale-105 transition"
          >
            Unlock Me 💕
          </button>
        </div>
      )}
    </div>
  );
}
