import { useState } from "react";

// SAMPLE MEDIA (edit paths later)
import Jan7Img1 from "../assets/jan16_1.jpg";
import Jan7Img2 from "../assets/jan16_2.jpg";
import Jan14Video from "../assets/jan16_3.jpg";

import Feb13Img1 from "../assets/feb13_1.jpg";

import Mar12Img1 from "../assets/mar12_1.jpg";
import Mar13Img1 from "../assets/mar13_1.jpg";

import Apr8Img1 from "../assets/apr8_1.jpg";

import May3Img1 from "../assets/may3_1.jpg";
import May15Vid1 from "../assets/may15_1.mp4";

import Jun6Img1 from "../assets/june6_1.jpg";
import Jun19Img1 from "../assets/june19_1.jpg";

import Jul13Img1 from "../assets/jul13_1.jpg";
import Jul13Img2 from "../assets/jul13_2.jpg";
import Jul27Img1 from "../assets/jul27_1.jpg";
import Jul27Img2 from "../assets/jul27_2.jpg";

import Aug27Vid1 from "../assets/aug27_1.mp4";

import Sep20Img1 from "../assets/sep20_1.jpg";
import Sep20Img2 from "../assets/sep20_2.jpg";
import Sep20Img3 from "../assets/sep20_3.jpg";

import Oct11Img1 from "../assets/oct11_1.jpg";
import Oct11Img2 from "../assets/oct11_2.jpg";
import Oct11Img3 from "../assets/oct11_3.jpg";

import Nov29Img1 from "../assets/nov29_1.jpg";
import Nov29Img2 from "../assets/nov29_2.jpg";

import Dec21Img1 from "../assets/dec21_1.jpg";
import Dec21Img2 from "../assets/dec21_2.jpg";
import Dec21Vid1 from "../assets/dec21_4.mp4";


const months = [
  { name: "January", days: 31 },
  { name: "February", days: 28 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
];

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* 📌 MEDIA MAP */
const mediaData = {
  January: {
    16: [
      { type: "image", src: Jan7Img1 },
      { type: "image", src: Jan7Img2 },
      { type: "image", src: Jan14Video },
    ],
  },

  February: {
    13: [
      { type: "image", src: Feb13Img1 }
    ],
  },

  March: {
    12: [
      { type: "image", src: Mar12Img1 }
    ],
    13: [
      { type: "image", src: Mar13Img1 }
    ],
  },
  
  April: {
    8: [
      { type: "image", src: Apr8Img1 }
    ],
  },

  May: {
    3: [
      { type: "image", src: May3Img1 }
    ],
    15: [
      { type: "video", src: May15Vid1 }
    ],
  },

   June: {
    6: [
      { type: "image", src: Jun6Img1 }
    ],
    19: [
      { type: "image", src: Jun19Img1 }
    ],
  },

   July: {
    13: [
      { type: "image", src: Jul13Img1 },
      { type: "image", src: Jul13Img2 }
    ],
    27: [
      { type: "image", src: Jul27Img1 },
      { type: "image", src: Jul27Img2 }
    ],
  },

  August: {
    27: [
      { type: "video", src: Aug27Vid1 }
    ],
  },

  September: {
    20: [
      { type: "image", src: Sep20Img1 },
      { type: "image", src: Sep20Img2 },
      { type: "image", src: Sep20Img3 }
    ],
  },

  October: {
    11: [
      { type: "image", src: Oct11Img1 },
      { type: "image", src: Oct11Img2 },
      { type: "image", src: Oct11Img3 }
    ],
  },

  November: {
    29: [
      { type: "image", src: Nov29Img1 },
      { type: "image", src: Nov29Img2 }
    ],
  },

  December: {
    21: [
      { type: "image", src: Dec21Img1 },
      { type: "image", src: Dec21Img2 },
      { type: "video", src: Dec21Vid1 }
    ],
  },
  
};

export default function Gallery() {
  const [monthIndex, setMonthIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const [selectedDay, setSelectedDay] = useState(null);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const month = months[monthIndex];
  const monthName = month.name;

  const mediaList =
    selectedDay && mediaData[monthName]?.[selectedDay]
      ? mediaData[monthName][selectedDay]
      : [];

  const handleNextMonth = () => {
    if (monthIndex < months.length - 1) {
      setDirection("next");
      setMonthIndex((p) => p + 1);
      setSelectedDay(null);
      setMediaIndex(0);
    }
  };

  const handlePrevMonth = () => {
    if (monthIndex > 0) {
      setDirection("prev");
      setMonthIndex((p) => p - 1);
      setSelectedDay(null);
      setMediaIndex(0);
    }
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
    setMediaIndex(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b0b2e] via-[#3b0764] to-[#6b21a8] text-white flex items-center justify-center px-4 sm:px-6 md:px-10 overflow-x-hidden">


      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 max-w-6xl w-full items-center">


        {/* ================= CALENDAR (LEFT) ================= */}
        <div className="w-full lg:w-[55%]">


          {/* MONTH NAV */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <button
              onClick={handlePrevMonth}
              disabled={monthIndex === 0}
              className="text-4xl text-purple-300 hover:text-purple-100 transition disabled:opacity-30"
            >
              &lt;
            </button>

            <h2 className="text-3xl font-['Dancing_Script'] text-purple-200">
              {monthName} 2025
            </h2>

            <button
              onClick={handleNextMonth}
              disabled={monthIndex === months.length - 1}
              className="text-4xl text-purple-300 hover:text-purple-100 transition disabled:opacity-30"
            >
              &gt;
            </button>
          </div>

          {/* CALENDAR */}
          <div
            key={monthIndex}
            className={`bg-white/5 rounded-3xl p-6 shadow-xl backdrop-blur-md
              transition-all duration-500 ease-in-out
              ${direction === "next" ? "animate-slide-left" : "animate-slide-right"}
            `}
          >
            {/* WEEKDAYS */}
            <div className="grid grid-cols-7 gap-3 mb-4 text-center text-purple-300">
              {weekDays.map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            {/* DAYS */}
            <div className="grid grid-cols-7 gap-2 sm:gap-3">

              {Array.from({ length: month.days }).map((_, i) => {
                const day = i + 1;
                const hasMedia = mediaData[monthName]?.[day];

                return (
                  <button
                    key={day}
                    onClick={() => handleSelectDay(day)}
                    className={`relative aspect-square rounded-xl flex items-center justify-center text-sm sm:text-base
                      transition-all duration-300
                      ${
                        selectedDay === day
                          ? "bg-purple-700 ring-2 ring-purple-300"
                          : "bg-purple-900/40 hover:bg-purple-700/70"
                      }
                    `}
                  >
                    {day}

                    {/* MEDIA INDICATOR */}
                    {hasMedia && (
                      <span className="absolute bottom-1 right-1 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= MEDIA BOX (RIGHT) ================= */}
        <div className="w-full lg:w-[45%] bg-white/10 rounded-3xl p-4 sm:p-6 shadow-xl backdrop-blur-md flex flex-col items-center justify-center min-h-[320px] sm:min-h-[420px]">

          {!selectedDay && (
            <p className="text-purple-200 text-center text-lg">
              Select a date to view memories 💜
            </p>
          )}

          {selectedDay && mediaList.length === 0 && (
            <>
              <h3 className="text-xl font-semibold mb-2">
                {monthName} {selectedDay}, 2025
              </h3>
              <p className="text-purple-200 text-center">
                Wala ako makitang pic sorry :(
              </p>
            </>
          )}

          {mediaList.length > 0 && (
            <>
              <h3 className="text-xl font-semibold mb-4">
                {monthName} {selectedDay}, 2025
              </h3>

              {/* MEDIA */}
              {mediaList[mediaIndex].type === "image" && (
                <img
                  src={mediaList[mediaIndex].src}
                  alt="memory"
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-xl max-h-[220px] sm:max-h-[260px] object-contain mb-4 cursor-pointer

                             transition-transform duration-300 hover:scale-105"
                />
              )}

              {mediaList[mediaIndex].type === "video" && (
                <video
                  src={mediaList[mediaIndex].src}
                  controls
                  className="rounded-xl max-h-[220px] sm:max-h-[260px] object-contain mb-4 cursor-pointer

                             transition-transform duration-300 hover:scale-105"
                />
              )}

              {/* MEDIA NAV */}
              {mediaList.length > 1 && (
                <div className="flex gap-6 mt-2">
                  <button
                    onClick={() => setMediaIndex((i) => Math.max(i - 1, 0))}
                    className="text-purple-300 hover:text-purple-100 text-2xl"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={() =>
                      setMediaIndex((i) =>
                        Math.min(i + 1, mediaList.length - 1)
                      )
                    }
                    className="text-purple-300 hover:text-purple-100 text-2xl"
                  >
                    &gt;
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-purple-300"
          >
            ✕
          </button>

          <img
            src={mediaList[mediaIndex].src}
            alt="expanded"
            className="max-w-[95%] max-h-[85%] sm:max-w-[90%] sm:max-h-[90%] rounded-2xl shadow-2xl animate-fade-in"

          />
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slide-left {
          animation: slideLeft 0.5s ease-out;
        }
        .animate-slide-right {
          animation: slideRight 0.5s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

