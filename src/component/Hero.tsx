import React from "react";

import { useTypewriter } from "../hooks/useTypewriter";

const roles = [
  "Frontend Developer",
  "UI Engineer",
  "React Enthusiast",
  "Gamer",
  "Music Lover",
];

const Hero: React.FC = () => {
  const typed = useTypewriter(roles, 80, 40, 900);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Hi, I'm <span className="text-purple-500">Arikita</span>{" "}
          <span className="text-white">a.k.a</span>{" "}
          <span className="text-purple-500">Susan</span>{" "}
          <span className="text-white">or</span>{" "}
          <span className="text-purple-500">Rim</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 h-6 mb-4">
          <span className="text-white">{typed}</span>
          <span className="animate-pulse">|</span>
        </p>

        <p className="text-gray-400 mb-8">
          I'm a{" "}
          <span className="text-white font-semibold">Frontend Developer</span>{" "}
          and <span className="text-white font-semibold">Gamer</span> based in{" "}
          <span className="text-white font-semibold">Hanoi, Vietnam</span>. I'm
          just a person who loves coding,gaming and music.
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              document.getElementById("skills")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-6 py-3 rounded-xl font-semibold bg-purple-500 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-600 transition"
          >
            All About Me
          </button>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="px-6 py-3 rounded-xl font-semibold border border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition"
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
