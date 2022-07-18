import React from 'react'

function Contact() {
  return (
    <>
        <div className='flex justify-center items-center bg-[#4f4f4f]'><div className='h-1 w-32 text-[#4f4f4f] bg-white'>-----</div></div>
    <div className='flex justify-center items-center w-screen bg-[#4f4f4f]'>
      <div className='text-center h-max w-full p-5 md:w-1/2 font-arvo text-white rounded-box bg-[#4f4f4f] lg:m-20 md:m-5 m-2 lg:text-6xl text-4xl  pt-10 pb-10 font-extrabold '>
        <div className='hover:scale-105 transition ease-out pb-10'>Contact Me</div>
        <div className='bg-trasnparent grid grid-cols-3 gap-10 text-center md:px-20 px-2 pt-10'>
          <i class=" h-14  w-full flex justify-center hover:scale-125 transition ease-in devicon-github-original-wordmark" onClick={()=> window.open("https://github.com/SumedhBengale", "_blank")} alt='GitHub'></i>
          <img className='h-14  w-full flex justify-center hover:scale-125 transition ease-in' onClick={()=> window.open("https://www.linkedin.com/in/sumedh-bengale/", "_blank")} alt='LinkedIn' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          <img className='h-14  w-full flex justify-center hover:scale-125 transition ease-in' onClick={()=> window.open("https://twitter.com/ssbengale", "_blank")} alt='Twitter' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact