import { SkillsInfo } from "../../constants"
import Tilt from 'react-parallax-tilt'

export default function Skills() {
  return (
    <section id="skills"
      className="py-16 pb-16 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans clip-path-custom"
      style={{
        backgroundImage: `linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
                      linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)`
      }}
    >
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">Skills</h2>
        <div className="w-18 h-1 bg-[#8245ec] mx-auto mt-1"></div>
        <p className="text-gray-400 mt-3 text-sm font-semibold">
          A collection of my technical skills and expertise honed through various projects and experiences
        </p>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-1 lg:gap-4 py-6 justify-center">
        {SkillsInfo.map(category => (
          <div key={category.title}
            className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 py-5 sm:py-4 mb-6 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mb-3 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full mt-2">
                {category.skills.map(skill => (
                  <div key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 py-2 px-2 text-center rounded-3xl cursor-pointer h-9"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 sm:w-6 sm:h-5"
                    />
                    <span className="text-[8px] font-semibold text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  )
}