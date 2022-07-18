import React from 'react';
import Lakshya from './ProjectCards/Lakshya';
import project from '../Assets/project.svg';
import EventTick from './ProjectCards/EventTick';
import Grocery from './ProjectCards/Grocery';
import CrossClip from './ProjectCards/CrossClip';
import ScreenSort from './ProjectCards/ScreenSort';

function Projects() {
  const backgroundImageStyle={
    backgroundImage: `url("${project}")`,
    backgroundSize: 'contain',
  };
  return (
    <>
    <div className=" w-100 grid bg-[#4f4f4f]">
    <div className='flex justify-center items-center bg-[#4f4f4f]'><div className='h-1 w-32 text-[#4f4f4f] bg-white'>-----</div></div>
      <div className='text-center w-screen  lg:text-6xl pb-20 text-4xl text-white font-extrabold hover:scale-105 transition ease-out pt-10 '>Projects</div>
        <div className='lg:text-4xl text-2xl text-center'>
          <div className='text-white '>Web Development</div>
        <div className='grid grid-cols-1 w-full gap-32 md:px-10 px-4 py-20 place-items-center'>
          <Lakshya></Lakshya>
          <EventTick></EventTick>
          <Grocery></Grocery>
      </div>
      </div>
      <div className='lg:text-4xl text-2xl text-center'>
      <div className='text-white '>App Development</div>

        <div className='grid grid-cols-1 w-full gap-32 px-5 py-20 place-items-center'>
          <CrossClip></CrossClip>
          <ScreenSort></ScreenSort>
          <div className='flex'>
            <div className='text-white'>For more projects, visit my GitHub Profile ---{'>'}</div>
            <i class="devicon-github-original text-white text-4xl hover:scale-125 active:scale-100 transition ease-out pl-2" onClick={()=> window.open("https://github.com/SumedhBengale", "_blank")}></i>
          </div>
      </div>
      </div>
    </div>

    </>
  )
}

export default Projects