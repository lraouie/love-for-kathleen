import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Sample songs (make sure you put the audio files in src/assets)
import CantHelp from "../assets/cant_help_falling_in_love.mp3";
import UntilIFoundYou from "../assets/until_i_found_you.mp3";
import Sagada from "../assets/sagada.mp3";
import Perfect from "../assets/perfect.mp3";
import DiscImg from "../assets/music_disc.png"; // a circular disc image
import PlayIcon from "../assets/play.png";
import PauseIcon from "../assets/pause.png";

const songs = [
  {file: CantHelp },
  {file: UntilIFoundYou },
  {file: Sagada },
  {file: Perfect },
];

export default function Music() {
  const [current, setCurrent] = useState(null); // index of current song
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  const handlePlay = (i) => {
    if (current === i) {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        audioRef.current.play();
        setPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrent(i);
      setPlaying(true);
      setTimeout(() => audioRef.current.play(), 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b0b2e] via-[#4c1d95] to-[#a855f7] text-white px-6 py-10 flex flex-col items-center">
      
      <h1 className="text-4xl md:text-5xl mb-10 font-['Dancing_Script'] text-center drop-shadow-lg">
        Songs that remind me of our love
      </h1>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-2 gap-10">
        {songs.map((song, i) => (
          <div
            key={i}
            className="relative flex flex-col items-center cursor-pointer"
            onClick={() => handlePlay(i)}
          >
            <div
              className={`relative w-40 h-40 transition-transform duration-500 ${
                current === i && playing ? "animate-spin animate-tictac" : ""
              }`}
            >
              <img
                src={DiscImg}
                alt="disc"
                className="w-full h-full object-contain rounded-full"
              />
            
            </div>
            <p className="mt-4 text-center font-semibold text-lg max-w-[140px] truncate">

            </p>
          </div>
        ))}
      </div>

      {/* Hidden audio element */}
      {current !== null && (
        <audio
          ref={audioRef}
          src={songs[current].file}
          onEnded={() => setPlaying(false)}
        />
      )}
    </div>
  );
}

