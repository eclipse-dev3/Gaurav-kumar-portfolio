import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 pb-16 px-[12vw] md:px-[10vw] lg:px-[20vw] font-sans clip-path-custom"
      style={{
        backgroundImage: `linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),
                      linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)`
      }}
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white">EDUCATION</h2>
        <div className="w-37 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-3 text-sm font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative">

        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-4 transform sm:-translate-x-1/2 -translate-x-1/2 w-[2px] bg-white h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={` flex flex-col sm:flex-row md:justify-center items-center mb-10 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-4 transform -translate-x-1/2 bg-gray-400 border-[3px] border-[#8245ec] w-9 h-9 sm:w-11 sm:h-11 rounded-full flex justify-center items-center z-10 overflow-hidden">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Card */}
            <div
              className={`
                w-[75%] sm:w-[40%] p-3 sm:p-5 rounded-2xl border border-white
                bg-gray-900 backdrop-blur-md
                shadow-[0_0_8px_1px_rgba(130,69,236,0.3)]
                transform transition-transform duration-300 hover:scale-105
                ml-10 sm:ml-0
                ${index % 2 === 0 ? "sm:mr-87 sm:pl-6" : "sm:ml-87 sm:pr-4"}
              `}
            >
              {/* Logo + Info Row */}
              <div className="flex items-center space-x-3">

                {/* School Logo */}
                <div className="w-14 h-10 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Degree + School + Date */}
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-base font-semibold text-white leading-tight">
                    {edu.degree}
                  </h3>
                  <h4 className="text-xs text-gray-300 mt-0.5">
                    {edu.school}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              <p className="mt-3 text-gray-400 font-bold text-xs">Grade: {edu.grade}</p>
              <p className="mt-2 text-gray-400 text-xs leading-relaxed">{edu.desc}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;