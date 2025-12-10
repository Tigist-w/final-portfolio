import React from "react";
import { motion } from "framer-motion";

// ---- React Icons ----
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiGithub,
  SiGit,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiFigma,
  SiMiro,
  SiCanva,
  SiGoogle,
  SiBootstrap,
  SiVite,
  SiPostman,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";

import {
  FaDatabase,
  FaServer,
  FaPenNib,
  FaShapes,
  FaCubes,
  FaChartPie,
  FaChartLine,
  FaPeopleCarry,
  FaHandshake,
  FaBalanceScale,
  FaUniversity,
  FaMoneyCheckAlt,
  FaFileInvoiceDollar,
  FaShieldAlt,
  FaUserTie,
  FaClock,
  FaHandsHelping,
  FaBrain,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";

// ---- Skill Icon Component ----
const SkillIcon = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-200">
    <div className="text-4xl">{icon}</div>
    <p className="text-gray-300 text-sm">{label}</p>
  </div>
);

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 px-8 md:px-20 text-white relative z-20"
    >
      {/* ------------------------- HEADER ------------------------- */}
      <motion.h2
        className="text-4xl md:text-6xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Me
      </motion.h2>

      {/* ------------------------- MAIN ABOUT TEXT ------------------------- */}
      <motion.div
        className="max-w-4xl mx-auto text-center text-gray-300 leading-relaxed text-lg mb-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <strong className="text-purple-500">Who I Am:</strong> <br />
        I’m a full-stack developer, UI/UX designer, and MBA graduate with 6+
        years of experience in the banking industry. My background blends three
        worlds that usually stand apart{" "}
        <strong className="text-purple-500">business</strong>,{" "}
        <strong className="text-purple-500">design</strong>, and{" "}
        <strong className="text-purple-500">technology</strong> and that
        combination has become my biggest strength.
        <br />
        <br /> My career began in banking, where I spent years working directly
        with customers, systems, and financial processes. Every day, I saw how
        design, clarity, and technology influence trust — and how small
        improvements can transform someone’s experience. That exposure sparked
        something in me: I wanted to build the solutions, not just use them.
        <br />
        <br />
        <strong>So I taught myself to code.</strong> <br />
        <strong>I learned UI/UX.</strong> <br />
        <strong>I dove into real projects.</strong> <br />
        And I discovered that creating meaningful digital products is exactly
        where I belong.
      </motion.div>

      {/* ------------------------- PROFESSIONAL SKILLSET ------------------------- */}
      <motion.h3
        className="text-3xl font-semibold mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Professional Skillset
      </motion.h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 max-w-5xl mx-auto mb-20">
        {/* ---- Full Stack Skills ---- */}
        <SkillIcon icon={<SiHtml5 color="#E34F26" />} label="HTML5" />
        <SkillIcon icon={<SiCss3 color="#1572B6" />} label="CSS3" />
        <SkillIcon icon={<SiJavascript color="#F7DF1E" />} label="JavaScript" />
        <SkillIcon icon={<SiReact color="#61DBFB" />} label="React" />
        <SkillIcon icon={<SiNodedotjs color="#3C873A" />} label="Node.js" />
        <SkillIcon icon={<SiMongodb color="#4DB33D" />} label="MongoDB" />
        <SkillIcon icon={<SiExpress color="#000000" />} label="Express.js" />
        <SkillIcon icon={<SiTailwindcss color="#38BDF8" />} label="Tailwind" />
        <SkillIcon icon={<FaDatabase color="#795548" />} label="Database" />
        <SkillIcon
          icon={<FaServer color="#6C63FF" />}
          label="REST API / Server"
        />
        <SkillIcon icon={<SiGithub color="#ffffff" />} label="GitHub" />

        <SkillIcon icon={<SiBootstrap color="#7952B3" />} label="Bootstrap" />
        <SkillIcon icon={<SiVite color="#646CFF" />} label="Vite" />
        <SkillIcon icon={<SiPostman color="#FF6C37" />} label="Postman" />

        {/* ---- UI/UX Skills ---- */}
        <SkillIcon icon={<FaPenNib color="#E91E63" />} label="Wireframing" />
        <SkillIcon icon={<FaShapes color="#FF9800" />} label="Prototyping" />
        <SkillIcon icon={<FaCubes color="#4CAF50" />} label="Design Systems" />

        {/* ---- MBA / Business Skills ---- */}
        <SkillIcon
          icon={<FaChartPie color="#4CAF50" />}
          label="Business Analysis"
        />
        <SkillIcon
          icon={<FaChartLine color="#2196F3" />}
          label="Finance Mgmt"
        />
        <SkillIcon
          icon={<FaPeopleCarry color="#9C27B0" />}
          label="Leadership"
        />
        <SkillIcon icon={<FaHandshake color="#FFC107" />} label="Negotiation" />
        <SkillIcon
          icon={<FaBalanceScale color="#795548" />}
          label="Decision Making"
        />

        {/* ---- Banking Skills ---- */}
        <SkillIcon
          icon={<FaUniversity color="#3F51B5" />}
          label="Banking Ops"
        />
        <SkillIcon
          icon={<FaMoneyCheckAlt color="#009688" />}
          label="Financial Reporting"
        />
        <SkillIcon
          icon={<FaFileInvoiceDollar color="#8BC34A" />}
          label="Reconciliation"
        />
        <SkillIcon
          icon={<FaShieldAlt color="#F44336" />}
          label="Risk & Compliance"
        />
        <SkillIcon
          icon={<FaUserTie color="#607D8B" />}
          label="Customer Service"
        />

        {/* ---- Soft Skills ---- */}
        <SkillIcon icon={<FaClock color="#03A9F4" />} label="Time Management" />
        <SkillIcon icon={<FaHandsHelping color="#FF9800" />} label="Teamwork" />
        <SkillIcon icon={<FaBrain color="#9C27B0" />} label="Problem Solving" />
        <SkillIcon
          icon={<FaComments color="#03A9F4" />}
          label="Communication"
        />
        <SkillIcon
          icon={<FaLightbulb color="#FFEB3B" />}
          label="Critical Thinking"
        />
      </div>

      {/* ------------------------- TOOLS I USE ------------------------- */}
      <motion.h3
        className="text-3xl font-semibold mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Tools I Use
      </motion.h3>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-10 max-w-5xl mx-auto mb-20">
        <SkillIcon icon={<TbBrandVscode color="#007ACC" />} label="VS Code" />
        <SkillIcon icon={<SiFigma color="#F24E1E" />} label="Figma" />
        <SkillIcon icon={<SiMiro color="#FFD02F" />} label="Miro" />
        <SkillIcon icon={<SiCanva color="#00C4CC" />} label="Canva" />
        <SkillIcon icon={<SiGit color="#F05133" />} label="Git" />
        <SkillIcon
          icon={<SiGoogle color="#4285F4" />}
          label="Google Workspace"
        />
      </div>

      {/* ------------------------- BUSINESS & MBA SECTION ------------------------- */}
      <motion.div
        className="max-w-4xl mx-auto mt-24 text-center text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3 className="text-3xl font-semibold mb-6">
          Business & Strategy Background
        </h3>
        <p className="text-lg">
          With an <strong>MBA</strong> and over{" "}
          <strong>6+ years of banking experience</strong>, I bring strong
          analytical thinking, financial understanding, and organizational
          efficiency into every product I design and develop. I combine{" "}
          <strong>business logic</strong>, <strong>user needs</strong>, and{" "}
          <strong>modern development</strong> to build products that actually
          solve real problems.
        </p>
      </motion.div>

      {/* ------------------------- CTA ------------------------- */}
      <div className="flex justify-center mt-16">
        <a
          href="#projects"
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold text-white shadow-lg transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default About;
