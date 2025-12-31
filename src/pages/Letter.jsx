import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const message = `
Dear Mahal,

Before 2025 ends, I want you to know how proud I am of you.

This year wasn’t easy, facing so many struggles, moments of doubt, exhaustion, and pain, especially losing Stolley. Yet even through all of that you kept going. You became stronger than you realize and you never gave up, even on days when everything felt heavy.

I’ve seen how hard you worked, how much you overthought about the future, and how tired you were but you still showed up being that strong woman Kathleen because that's who you are, the strongest person I know. That alone means so much more than you know.

We’ve been together for five years now since July 27 2020, and every year with you has been a blessing. I’m sorry for the times I caused you disappointment, when I didn't meet your expectations, or when I was being insensitive. I’m still learning, being better, but I promise I’m trying to be better for you and for us.
Thank you for staying, for loving, for choosing us even when things weren’t perfect. I want you to know that I will always be here for you and I will always be rooting for you, believing in you, and loving you in your good days, your tired days, and everything in between. 

We finished 2025 together, and I believe we’ll face all the coming years together too. No matter what the future brings, my love for you will always remain.

I love you. Always.
Your Mahal 💜
`;

export default function Letter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  /* TYPEWRITER EFFECT */
  useEffect(() => {
    if (index < message.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + message[index]);
        setIndex(index + 1);
      }, 35);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  const finishedTyping = index >= message.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b0b2e] via-[#4c1d95] to-[#a855f7] flex items-center justify-center px-6 py-10">
      
      {/* BOOK */}
      <div
        className="
          max-w-2xl w-full
          bg-[#fdf6e3]
          text-[#3b2f2f]
          p-8 md:p-12
          shadow-[0_20px_60px_rgba(0,0,0,0.4)]
          border-l-8 border-purple-400
          flex flex-col
          justify-between
        "
        style={{ fontFamily: "'Patrick Hand', cursive" }}
      >
        <div>
          <h1 className="text-3xl mb-6 text-center text-purple-700">
            A Letter For You
          </h1>

          <pre className="whitespace-pre-wrap text-lg leading-relaxed">
            {text}
            {!finishedTyping && <span className="animate-pulse">|</span>}
          </pre>
        </div>

        {/* GO BACK LINK - only visible after typing finished */}
        {finishedTyping && (
          <button
            onClick={() => navigate("/home")}
            className="
              mt-6 self-start
              text-purple-700
              text-lg
              relative
              group
              transition-all
              hover:text-purple-900
              hover:-translate-y-0.5
            "
          >
            ← go back to home
            <span
              className="
                absolute left-0 -bottom-1
                w-0 h-[2px]
                bg-purple-400
                transition-all duration-300
                group-hover:w-full
              "
            />
          </button>
        )}
      </div>
    </div>
  );
}
