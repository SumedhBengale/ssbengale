import { useRef } from 'react';
import './App.css';
import Certifications from './Components/Certifications';
import Contact from './Components/Contact';
import KnownSkills from './Components/KnownSkills';
import MyIntro from './Components/MyIntro';
import Projects from './Components/Projects';

function App() {
  const intro=useRef(null);
  const projects=useRef(null);
  const skills=useRef(null);
  const certifications=useRef(null);
  const stats=useRef(null);
  const contact=useRef(null);
  const handleIntro = () => {
    intro.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleProjects = () => {
    projects.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleSkills = () => {
    skills.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleCertifications = () => {
    certifications.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleStats = () => {
    stats.current?.scrollIntoView({behavior: 'smooth'});
  };
  const handleContact = () => {
    contact.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
        <div class="bg-[#4f4f4f] p-2 fixed w-full z-10">
        <div class=" mx-2 flex">
          <div class="dropdown">
            <label tabindex="0" class="btn m-1 lg:hidden bg-[#4f4f4f] text-white hover:text-[#4f4f4f] hover:bg-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-[#4f4f4f] rounded-box w-72">
            <li class="m-2">
                    <div className='btn bg-[#4f4f4f] text-white outline-white hover:outline-[#4f4f4f] hover:text-[#4f4f4f] hover:bg-white' onClick={handleIntro}>Intro</div>
                    </li>
                    <li class="m-2">
                    <div className='btn bg-[#4f4f4f] text-white outline-white hover:outline-[#4f4f4f] hover:text-[#4f4f4f] hover:bg-white' onClick={handleSkills}>Skills</div>
                    </li>
                    <li class="m-2">
                    <div className='btn bg-[#4f4f4f] text-white outline-white hover:outline-[#4f4f4f] hover:text-[#4f4f4f] hover:bg-white' onClick={handleProjects}>Projects</div>
                    </li>
                      <li class="m-2">
                      <div className='btn bg-[#4f4f4f] text-white outline-white hover:outline-[#4f4f4f] hover:text-[#4f4f4f] hover:bg-white' onClick={handleCertifications}>Certifications</div>
                    </li>
                    <li class="m-2">
                    <div className='btn bg-[#4f4f4f] text-white outline-white hover:outline-[#4f4f4f] hover:text-[#4f4f4f] hover:bg-white' onClick={handleContact}>Contact Me</div>
                    </li>
            </ul>
          </div>
          <div class="flex w-full justify-start items-center text-white font-extrabold">
                  <div class="text-2xl pl-2 text-white transition mb-2 ease-out hover:scale-105">Sumedh Bengale</div>
          </div>
          <div class="hidden justify-end lg:flex">
              <ul class="flex">
                <li class="mr-3">
                <div className='btn btn-ghost bg-[#4f4f4f] text-white hover:text-black hover:bg-white hover:scale-105' onClick={handleIntro}>Intro</div>
                </li>
                <li class="mr-3">
                <div className='btn btn-ghost bg-[#4f4f4f] text-white hover:text-black hover:bg-white hover:scale-105' onClick={handleSkills}>Skills</div>
                </li>
                <li class="mr-3">
                <div className='btn btn-ghost bg-[#4f4f4f] text-white hover:text-black hover:bg-white hover:scale-105' onClick={handleProjects}>Projects</div>
                </li>
                  <li class="mr-3">
                  <div className='btn btn-ghost bg-[#4f4f4f] text-white hover:text-black hover:bg-white hover:scale-105' onClick={handleCertifications}>Certifications</div>
                </li>
                <li class="mr-3">
                <div className='btn btn-ghost w-32 bg-[#4f4f4f] text-white hover:text-black hover:bg-white' onClick={handleContact}>Contact Me</div>
                </li>
              </ul>
          </div>
        </div>
    </div>




    <div ref={intro}><MyIntro></MyIntro></div>
    <div ref={skills}><KnownSkills></KnownSkills></div>
    <div ref={projects}><Projects></Projects></div>
    <div ref={certifications}><Certifications></Certifications></div>
    <div ref={contact}><Contact></Contact></div>
    </>
  );
}

export default App;
