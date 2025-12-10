import { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // center of viewport
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActive(link.href.substring(1));
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check active on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-blur-md z-30">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <img
          src={require("../assets/logo.png")}
          alt="Tigist Logo"
          className="w-12 h-auto"
        />

        <ul className="hidden md:flex gap-8 text-white">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`transition hover:text-purple-400 ${
                  active === link.href.substring(1)
                    ? "text-purple-400 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-4 text-white px-8 py-4 md:hidden bg-gray-800">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block hover:text-purple-400 transition ${
                  active === link.href.substring(1)
                    ? "text-purple-400 font-semibold"
                    : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
