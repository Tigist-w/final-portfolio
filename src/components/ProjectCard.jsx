import React from "react";
import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

export default function ProjectCard({
  title,
  description,
  image,
  gh,
  demo,
  isUI,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl p-5 hover:shadow-purple-500/40 hover:bg-white/20 transition relative"
    >
      <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
        />
      </div>

      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>

      <div className="flex gap-4 mt-3">
        <a
          href={gh}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-purple-300 hover:text-white transition text-lg"
        >
          {isUI ? (
            "🎨 Figma"
          ) : (
            <>
              <BsGithub /> GitHub
            </>
          )}
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-purple-300 hover:text-white transition text-lg"
          >
            {isUI ? (
              "📄 Case Study"
            ) : (
              <>
                <CgWebsite /> Demo
              </>
            )}
          </a>
        )}
      </div>
    </motion.div>
  );
}
