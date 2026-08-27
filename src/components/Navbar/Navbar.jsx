import { FiX, FiMenu } from "react-icons/fi"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useEffect, useState } from "react"


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleMenuClick = (section) => {
        setActiveSection(section);
        setIsOpen(false);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const menuItems = [
        { id: "about", label: 'About' },
        { id: "skills", label: 'Skills' },
        { id: "Projects", label: 'Projects' },
        { id: "education", label: 'Education' },
        { id: "contact", label: 'Contact' },
    ]

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#05041473] backdrop-blur-md shadow-md" : "bg-transparent"
            }`}>
            <div className="text-white py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="text-base font-semibold cursor-pointer">
                    <span className="text-[#8245ec]">&lt;</span>
                    <span className="text-[#fff]">Gaurav</span>
                    <span className="text-[#8245ec]">/</span>
                    <span className="text-[#fff]">Kumar</span>
                    <span className="text-[#8245ec]">&gt;</span>
                </div>

                {/* Menu items */}
                <ul className="hidden md:flex space-x-6 text-gray-300">
                    {menuItems.map((item) => (
                        <li key={item.id} className={`text-sm cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? 'text-[#8245ec]' : 'text-gray-300'}`}>
                            <button className="cursor-pointer"
                                onClick={() => handleMenuClick(item.id)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Social Icons */}
                <div className="hidden md:flex space-x-4">
                    <a
                        href="https://github.com/eclipse-dev3"
                        target="_blank"
                        className="text-gray-300 hover:text-[#8245ec]"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ergaurav2004"
                        target="_blank"
                        className="text-gray-300 hover:text-[#8245ec]"
                    >
                        <FaLinkedin size={20} />
                    </a>
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden">
                    {isOpen ? (
                        <FiX
                            className="text-2xl text-[#8245ec] cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />
                    ) : (
                        <FiMenu
                            className="text-2xl text-[#8245ec] cursor-pointer"
                            onClick={() => setIsOpen(true)}
                        />
                    )}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-11 right-0 py-4 px-7 transition-all duration-300 ease-in-out
            bg-[#1c0a47] 
            backdrop-blur-lg 
            z-50 rounded-tl-lg rounded-bl-lg shadow-lg md:hidden"
                >
                    <ul className="flex flex-col items-start justify-between gap-4 text-gray-300">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={`w-full cursor-pointer py-2 px-5 rounded text-sm hover:text-white ${activeSection === item.id ? "bg-[#3b0992]" : ""
                                    }`}
                            >
                                <button onClick={() => handleMenuClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <div className="flex w-full py-2 px-5 space-x-4 justify-between">
                            <a
                                href="https://github.com/eclipse-dev3"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaGithub size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ergaurav2004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </ul>
                </div>
            )}

        </nav>
    )
}