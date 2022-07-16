import React from 'react';
import Lakshya from './ProjectCards/Lakshya';

function Projects() {
  return (
    <>
    <div className=" w-100 grid bg-[#4facf7]">
      <div className='text-center w-screen lg:text-6xl text-4xl text-[#001122]'>Projects</div>
        <div className='divider'></div>
        <div className='lg:text-4xl text-2xl text-center'> Web Development
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full gap-32 lg:px-24 md:px-20 px-14 py-20 place-items-center'>
          <Lakshya></Lakshya>
          <Lakshya></Lakshya>
      </div>
      </div>
    </div>
    </>
  )
}

export default Projects