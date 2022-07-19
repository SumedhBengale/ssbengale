import React from 'react'
import TypeAnimation from 'react-type-animation';
 import image from '../Assets/image.jpg';
import instagram from '../Assets/instagram.svg';


function MyIntro() {
  return (
    <>
      <div className="h-full w-full bg-[#4f4f4f] grid grid-cols-12">
        <div className='lg:col-start-4 lg:col-span-9 col-start-1 col-span-12 pl-2 pr-2 mt-32 flex lg:flex-row flex-col items-center '>
          <div className='group stack rounded-full cursor-pointer' onClick={()=> window.open("https://www.instagram.com/sumedh_bengale/", "_blank")}>
            <div className='flex justify-center items-center z-10 lg:h-72 lg:w-72 h-48 w-48 '>
              <img src={instagram} className='h-32 w-32 rounded-box opacity-0 group-hover:opacity-50 group-hover:transition ease-out'></img>
            </div>
          <img src={image} className="flex lg:h-72 lg:w-72 h-48 w-48 rounded-full shadow-2xl group-hover:scale-105 transition ease-out"></img>
          </div>
          <div className='lg:pl-10 pl-0 text-center lg:text-start pt-5 lg:pt-0'>
          <TypeAnimation
              cursor={false}
              sequence={[1000,"Hi!"]}
              className='md:text-5xl text-3xl text-white font-arvo font-extrabold after:content-["|"] after:animate-cursor0anim'
            >
            </TypeAnimation>
            <div className='flex lg:justify-start justify-center'>
              <TypeAnimation
                cursor={false}
                sequence={[2500,"I'm Sumedh"]}
                className='md:text-5xl text-3xl text-white font-arvo font-extrabold after:content-["|"] after:animate-cursor1anim'
              > 
                </TypeAnimation>
                <TypeAnimation
                cursor={false}
                sequence={[4000,"👋"]}
                className='md:text-4xl text-3xl text-white font-arvo font-extrabold translate-y-10 animate-[wave_5s_ease-in-out_infinite]'
              > 
                </TypeAnimation>
              </div>

              <TypeAnimation
                cursor={false}
                sequence={[4500,'Third Year Engineering Student, currently leaning', 1000,"Third Year Engineering Student, currently learning Flutter and Web Development."]}
                className='md:text-xl text-md pt-5 text-white font-arvo font-extrabold after:content-["|"] after:animate-cursor2anim'
              >

            </TypeAnimation>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyIntro