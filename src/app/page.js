import Image from "next/image";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Aboutsection from "./components/Aboutsection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import AchiveSection from "./components/AchiveSection";
import EmailSection from "./components/EmailSection";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-[#121212] '>
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4 ">
      <Herosection /> 
      <AchiveSection/>
      <Aboutsection/>
      <ProjectSection/>
      <Skills/>
      <EmailSection/>
      </div>
      <Footer/>
    </main>
  );
}
