import { useNavigate } from "react-router-dom";

// images
import GalleryImg from "../assets/gallery.png";
import LetterImg from "../assets/letter.png";
import LoveLockImg from "../assets/lovelock.png";
import MusicImg from "../assets/music.png";
import FlowerImg from "../assets/flower.png";

export default function Home() {
  const navigate = useNavigate();
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b0b2e] via-[#4c1d95] to-[#a855f7] text-white px-6 py-10">
      
      <h1 className="text-center text-4xl md:text-5xl mb-12 font-['Dancing_Script'] drop-shadow-lg">
        Opeeeeeen!
      </h1>

      <div className="max-w-5xl mx-auto flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
    <IconBox img={GalleryImg} onClick={() => navigate("/gallery")} />
    <IconBox img={LetterImg} onClick={() => navigate("/letter")} />
    <IconBox img={MusicImg} onClick={() => navigate("/music")} />
    <IconBox img={FlowerImg} onClick={() => navigate("/flower")} />
  </div>
</div>


    </div>
  );
}

/* =============================
   ICON-STYLE BOX
============================= */
function IconBox({ img, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        inline-flex
        items-center
        justify-center
        border-2 border-[#2a0a4f]
        bg-white/5
        p-3
        transition-all duration-300
        hover:scale-110
        hover:border-purple-400
        active:scale-95
      "
    >
      <img
        src={img}
        alt="icon"
        className="h-24 w-auto object-contain"
      />
    </div>
  );
}
