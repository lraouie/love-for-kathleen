import { useState } from "react";

export default function Flower() {
  const petals = Array.from({ length: 7 });
  const [activePetal, setActivePetal] = useState(null);

  const petalMessages = [
    "You are stronger than you think, even on days you feel tired and unsure. I see your courage every single day.",

    "Losing Stolley broke a part of you, but your love for her shows how big your heart is, and that love will always remain.",

    "It’s okay to overthink the future sometimes. Just remember: you are exactly where you need to be right now.",

    "Your hard work never goes unnoticed. Even on exhausting days at work, you still give your best and that’s admirable.",

    "Like cold brew with sweet vanilla cream, you’re strong but gentle, bitterness softened by warmth, and somehow always comforting.",

    "You didn’t give up this year, even when things felt heavy. That alone makes me so proud of you.",

    "No matter how hard life gets, you’ll never face it alone. I’m always here, mahal — choosing you, loving you, always."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b0b2e] via-[#3b0764] to-[#6b21a8]
                    flex flex-col items-center overflow-hidden relative">

      {/* TITLE – FIXED TOP */}
      <h1 className="fixed top-8 z-40 text-center
                     font-['Dancing_Script']
                     text-3xl md:text-4xl lg:text-5xl
                     text-purple-200 drop-shadow-lg">
        7 Purple Petals for you :)
      </h1>

      {/* CENTER CONTENT */}
      <div className="flex flex-col items-center justify-center flex-1 pt-24">

        {/* FLOWER */}
        <div className="relative w-[160px] h-[160px] flower-3d z-10">

          {/* PETALS */}
          {petals.map((_, i) => (
            <div
              key={i}
              className="petal w-[60px] h-[100px]"
              style={{
                transform: `
                  rotate(${i * (360 / 7)}deg)
                  translateY(-35px)
                  rotateX(20deg)
                `,
              }}
              onClick={() => setActivePetal(i)}
            />
          ))}

          {/* CORE */}
          <div
            className="absolute inset-0 m-auto w-32 h-32 rounded-full
                       bg-purple-900 shadow-inner shadow-black/40 z-20
                       flex items-center justify-center text-center
                       text-white font-['Dancing_Script']
                       text-sm p-3"
            style={{ transform: "translateY(45px)" }}
          >
            Click the petals,<br />Mahal 💜
          </div>
        </div>

        {/* STEM */}
        <div className="relative w-6 h-48 stem-3d -mt-2">
          <div className="absolute left-1 top-0 w-2 h-full rounded-full bg-green-300/40" />
        </div>
      </div>

      {/* MODAL */}
      {activePetal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center
                        bg-black/60 backdrop-blur-sm px-6">

          <div className="relative bg-[#fdf6e3] text-purple-900
                          rounded-3xl max-w-md w-full p-8
                          shadow-2xl animate-fade-in">

            <button
              onClick={() => setActivePetal(null)}
              className="absolute top-4 right-4
                         text-purple-400 hover:text-purple-700 text-xl"
            >
              ✕
            </button>

            <p className="font-['Dancing_Script']
                          text-xl md:text-2xl
                          text-center leading-relaxed italic">
              {petalMessages[activePetal]}
            </p>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .flower-3d {
          perspective: 1200px;
        }

        .petal {
          position: absolute;
          inset: 0;
          margin: auto;
          background: linear-gradient(to bottom, #e9d5ff, #9333ea);
          border-radius: 50% 50% 45% 45% / 60% 60% 40% 40%;
          transform-origin: bottom center;
          cursor: pointer;
          transition: all 0.35s ease;
          box-shadow:
            inset 0 -6px 12px rgba(0,0,0,0.25),
            0 4px 12px rgba(0,0,0,0.35);
        }

        .petal:hover {
          background: linear-gradient(to bottom, #c084fc, #6b21a8);
          transform: scale(1.05) translateY(-45px) rotateX(28deg);
        }

        .stem-3d {
          background: linear-gradient(to right, #14532d, #22c55e, #14532d);
          border-radius: 999px;
          transform: rotateX(12deg);
          box-shadow:
            inset 0 0 12px rgba(0,0,0,0.4),
            0 6px 12px rgba(0,0,0,0.35);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

