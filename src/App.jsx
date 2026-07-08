import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
// import Experience from './components/Experience/Experience'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Blur from './Blur'


function App() {

  return (
    <>
      <div className='bg-[#050414]'>

        <Blur position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

        {/* ✅ Grid size reduced from 14px_24px → 10px_16px to match scaled UI */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:10px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* ✅ pt-20 → pt-14 because navbar height is now smaller (py-3 instead of py-5) */}
        {/* ✅ max-w-7xl → max-w-6xl to match the scaled down layout */}
        <div className="relative pt-14 mx-auto">
          <Navbar />
          <About />
          <Skills />
          <Work />
          {/* <Experience /> */}
          <Education />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App