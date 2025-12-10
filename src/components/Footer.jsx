import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaBehance, FaTelegram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full py-20 px-8 md:px-20 text-white">
      <div className="max-w-7xl mx-auto px-8 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Designer Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold">
            Designed and Developed by{" "}
            <span className="text-purple-400">Tigist Worku</span>
          </h3>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <h3 className="text-gray-400">© {year} Tg Portfolio</h3>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a
            href="https://github.com/Tigist-w"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <AiFillGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/tigist-worku"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.behance.net/tigistworku"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaBehance />
          </a>

          <a
            href="https://t.me/tigistwo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
}
