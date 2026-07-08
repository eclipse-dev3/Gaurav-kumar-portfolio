import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import ProfileImg from '../../constants'
import { IoMdCloudDownload } from "react-icons/io";


export default function About() {
  return (
    <section
      id='about'
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-10 md:mt-16 lg:mt-20"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">

          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-1 font-bold text-white leading-tight">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
            Gaurav Kumar
          </h2>

          {/* Skills Heading with Typing Effect */}
          <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-3 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                'Frontend Developer',
                'Web Developer',
                'UI/UX Designer',
                'Coder',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h3>

          <p className='text-[12px]   text-gray-400 mb-6 mt-5 leading-relaxed'>
            I'm a frontend developer passionate about creating clean, responsive, and user-friendly web applications. I work with HTML, CSS, JavaScript, React, Redux Toolkit, and Tailwind CSS, and I'm always eager to keep learning, take on new challenges, and grow as a developer.
          </p>

          {/* ✅ Fixed: was missing opening <a> tag in original code */}
          <a
            href="/Gaurav_s_Resume.pdf"
            download="Gaurav_s_Resume.pdf"
            className="inline-block text-white py-2 px-6 rounded-full text-base font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg,#8245ec,#a855f7)',
              boxShadow: '0 0 2px #8245ec,0 0 2px #8245ec,0 0 40px #8245ec'
            }}
          >
            <IoMdCloudDownload className="inline-block mr-2 mb-1 text-xl" />
            <span>Resume</span>
          </a>
        </div>

        {/* Right side  */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-50 h-50 sm:w-60 sm:h-60 md:w-80 md:h-80 border-4 border-purple-700 rounded-full shadow-[0_10px_50px_rgba(130,69,236,0.5)]"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={ProfileImg}
              alt="Gaurav Kumar"
              className="w-full h-full rounded-full object-cover cursor-pointer"
            />
          </Tilt>
        </div>

      </div>
    </section>
  )
}