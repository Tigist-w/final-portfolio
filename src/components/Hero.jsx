import React from "react";
import Typewriter from "typewriter-effect";
import heroImg from "../assets/hero.svg"; // fallback image
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full py-20 px-8 md:px-20 text-white relative z-20"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">
        {/* LEFT COLUMN: TEXT + TYPEWRITER + BUTTONS + SOCIAL */}
        <div className="space-y-6 z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi There <span className="inline-block animate-wave">👋</span>
            <br />
            I’m <span className="text-purple-500">Tigist Worku</span>
          </h1>
          <br />
          <div className="text-2xl md:text-3xl font-semibold text-gray-300">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack Developer",
                  "React Developer",
                  "Node.js Developer",
                  "UI/UX Designer",
                  "MBA Graduate",
                  "Business Thinker",
                  "Problem Solver",
                  "Digital Experience Builder",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>

          <p className="text-gray-300 max-w-lg text-lg md:text-xl">
            I’m a full-stack developer, UI/UX designer, and MBA graduate with 6+
            years of banking experience. I blend business strategy, modern
            design, and technical execution to create simple, intuitive, and
            meaningful digital products.
          </p>
          <br />
          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-semibold shadow transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-600 hover:text-white rounded-xl font-semibold transition"
            >
              Hire Me
            </a>
          </div>
          <br />
          {/* SOCIAL ICONS */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Find Me On</h3>
            <div className="flex gap-5 text-3xl">
              {[
                { Icon: AiFillGithub, href: "https://github.com/Tigist-w" },
                {
                  Icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/in/tigist-worku",
                },
                {
                  Icon: FaBehance,
                  href: "https://www.behance.net/tigistworku",
                },
                { Icon: FaTelegram, href: "https://t.me/tigistwo" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:scale-110 transition transform duration-300 shadow-md hover:shadow-lg before:absolute before:inset-0 before:rounded-full before:bg-purple-500 before:opacity-0 hover:before:opacity-30 before:transition before:duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: HERO IMAGE / MODEL */}
        <div className="flex justify-center z-0">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-sm md:max-w-md object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
