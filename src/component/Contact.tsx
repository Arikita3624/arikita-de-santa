import React from "react";
import { FaGithub, FaFacebook, FaXTwitter, FaDiscord } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import avatar from "@/assets/avatar.jpg";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto py-20 px-6 border-t border-white/10"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Bên trái: thông tin liên hệ */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-lg text-gray-300">
            Contact me for something cool or just to say hi!
          </p>

          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-6 text-3xl text-white">
            <a
              href="https://www.facebook.com/nguyen.duy.hung.3624"
              target="_blank"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/Arikita3624"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/SusandeSanta"
              target="_blank"
              className="hover:text-gray-400 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://discord.com/users/1307407045909282897"
              target="_blank"
              className="hover:text-indigo-400 transition"
            >
              <FaDiscord />
            </a>
          </div>

          {/* Email & Phone */}
          <div className="space-y-2 text-gray-300 text-md">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <MdEmail className="text-purple-400 text-xl" />
              nguyenduyhung3624@gmail.com
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <MdPhone className="text-purple-400 text-xl" />
              +84 394879813
            </p>
          </div>
        </div>

        {/* Bên phải: avatar */}
        <div className="flex justify-center md:justify-end">
          <img
            src={avatar}
            alt="Avatar"
            className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/30"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
