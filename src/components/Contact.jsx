import React, { useState, useRef } from "react";
import { AiOutlineMail, AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaBehance, FaTelegram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
          setSending(false);
        },
        (error) => {
          console.error(error.text);
          alert("Oops! Something went wrong.");
          setSending(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen text-white py-20 px-8 md:px-20 z-10"
    >
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
        Contact Me
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p className="text-gray-300">
            Whether you need a modern website, a full digital product, or a
            strategic design solution I’m open to collaborations, freelance
            work, and full-time roles.
          </p>

          <div className="flex items-center gap-4 text-gray-300">
            <AiOutlineMail size={24} />
            <span>tigistworku783@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <AiOutlinePhone size={24} />
            <span>+251 919 234 942</span>
          </div>

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

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="from_email"
            value={formData.from_email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            required
            className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            disabled={sending}
            className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
