import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-5 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-base font-semibold text-purple-500">Gaurav kumar</h2>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-5 mt-3">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "Projects" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-xs sm:text-sm my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-4">
          {[
            { icon: <FaXTwitter />, link: "https://x.com/eclipse_devX" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ergaurav2004" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/eclipsedev03" },
            { icon: <FaGithub />, link: "https://github.com/eclipse-dev3" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-gray-400 mt-4">
          © 2025 Gaurav Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;