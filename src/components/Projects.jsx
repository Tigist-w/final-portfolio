import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Particle from "../components/Particle";
import nisirImg from "../assets/nisir.png";
import foodImg from "../assets/food.png";

import learningImg from "../assets/learning.png";
import resturantImg from "../assets/resturant.png";
import blogImg from "../assets/blog.png";
import jobImg from "../assets/job.png";
import plantImg from "../assets/plant.png";
import belleImg from "../assets/belle.png";
import inventoryImg from "../assets/inventory.png";
import restaurantImg from "../assets/restaurant.png";
import financeImg from "../assets/finance.png";

const uiProjects = [
  {
    title: "Nisir Mobile Banking App",
    description:
      "Design a next-generation digital banking experience that enables users to manage finances securely, transfer money instantly, pay bills, and track their spending in real time.",
    image: nisirImg,
    gh: "https://www.figma.com/design/ZCjbHhWyuOYD12Hjg5oSXw/Nisir-bank-mob-app?node-id=0-1&p=f", // Figma link
    demo: "https://www.canva.com/design/DAG6LVjg08g/k3LyaB9DgoqhIj4Xy1MwtA/edit", // Case study link
    isUI: true,
  },
  {
    title: "Food ordering App",
    description:
      "A simplified, efficient mobile ordering experience with transparent live-tracking that reduced order completion time and cognitive load while increasing reorders.",
    image: foodImg,
    gh: "https://www.figma.com/design/KkquBx7lwJruoV99KKWDJR/Food-Ordering-app?node-id=0-1&p=f",
    demo: "https://www.canva.com/design/DAG6LQnQu4A/WjL0X5dunjopuYNCT_-IPQ/edit",
    isUI: true,
  },

  {
    title: "Language Learning App",
    description:
      "Designed for areas with limited internet access, Lucy provides a complete offline learning experience through Vocabulary, Speaking Practice, and Quizzes, while AI-powered features activate when online. The goal was to deliver a modern, intuitive, and culturally relevant app that supports real learning for all Ethiopians.",
    image: learningImg,
    gh: "https://www.figma.com/design/zvPf2ByQy8tKUGbS1YDn8V/Language-Learning-App?node-id=27-25&p=f",
    demo: "https://www.canva.com/design/DAG5RLAcE2s/MF2gcAKQvCqknOycdI9c-g/edit",
    isUI: true,
  },
  {
    title: "Restaurant Website",
    description:
      "A modern and responsive restaurant website showcasing the menu, reservations, location, and online ordering, designed to provide a seamless user experience and entice visitors to dine or order.",
    image: resturantImg,
    gh: "https://www.figma.com/design/8ir3YtRCjLpGOVgna44jEy/Tigist-Worku?node-id=0-1&t=lr6815XiHiCeFLnb-1",
    demo: "",
    isUI: true,
  },
];

const devProjects = [
  {
    title: "Restaurant Ordering Website",
    description:
      "A user-friendly web application for restaurants that enables customers to browse menus, place orders, and make payments either by cash or card. Includes features like order management, real-time menu updates, and secure payment processing for a complete dining experience online.",
    image: restaurantImg,
    gh: "https://github.com/Tigist-w/Restaurant-Ordering",
    demo: "https://restaurant-ordering-blond.vercel.app",
  },
  {
    title: "Financial Dashboard: Expense and Income Management System",
    description:
      "A comprehensive financial dashboard that helps users track income, expenses, and overall financial health. Features include interactive charts, categorized expense tracking, budget analysis, and data visualization for smarter financial decisions. Fully responsive and optimized for seamless analytics.",
    image: financeImg,
    gh: "https://github.com/Tigist-w/finance-dashboard",
    demo: "https://finance-dashboard-ms72qfsda-tigists-projects-716a2cba.vercel.app",
  },
  {
    title: "Inventory Management System",
    description:
      "A full-stack application designed to streamline inventory tracking and management for businesses. Users can add, update, and delete products, monitor stock levels, and generate reports. Built with a modern tech stack, it ensures real-time updates and smooth user experience for efficient inventory control.",
    image: inventoryImg,
    gh: "https://github.com/Tigist-w/inventory-management-system",
    demo: "https://inventory-management-system-m8d1-9ftf41x14.vercel.app/",
  },
  {
    title: "Belle Hair & Cosmetics",
    description:
      "A fully responsive website designed to establish a strong online presence for a hair and cosmetics business. It features a modern design, user-friendly navigation, and showcases products effectively.",
    image: belleImg,
    gh: "https://bellehairandcosmetics.com/",
    demo: "https://bellehairandcosmetics.com/",
  },
  {
    title: "Full stack Blog Application",
    description:
      "A dynamic blogging platform where users can create, edit, and delete posts, comment on articles, and interact with other users. Features include user authentication, rich text editor, and responsive design, providing a smooth and engaging experience for both writers and readers",
    image: blogImg,
    gh: "https://github.com/Tigist-w/Full-stack-Blog-Web-App",
    demo: "https://blog-web-app-j1i6.onrender.com",
  },
  {
    title: "Job Finding Application",
    description:
      "An intuitive job portal that connects job seekers with potential employers. Users can browse, filter, and apply for jobs, while employers can post openings and manage applications. Advanced search and notification features enhance the job-hunting and recruitment experience.",
    image: jobImg,
    gh: "https://github.com/Tigist-w/find-job-app",
    demo: "https://find-job-app-ashen.vercel.app",
  },
  {
    title: "Plant-Analysis-Tool",
    description:
      "A web-based tool that helps users identify and analyze plants using images and data inputs. Offers insights on plant health, species information, and care instructions. Built with modern AI and image recognition technologies for accurate and interactive plant analysis.",
    image: plantImg,
    gh: "https://github.com/Tigist-w/Plant-Analysis-Tool",
    demo: "https://plant-analysis-tool-v8n9.onrender.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full py-20 px-8 md:px-20 text-white text-center relative overflow-hidden"
    >
      <Particle />
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          My Recent <span className="text-purple-400">Works</span>
        </motion.h2>

        <p>
          Here are some featured UI/UX and Development projects showcasing my
          skills and creativity.
        </p>
        <br />

        <h3 className="text-3xl font-bold mb-8 text-purple-300">
          UI/UX Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {uiProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        <h3 className="text-3xl font-bold mb-8 text-purple-300">
          Developer Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {devProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
