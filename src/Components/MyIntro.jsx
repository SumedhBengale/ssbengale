import React from 'react'
import TypeAnimation from 'react-type-animation';
 import intro_svg from '../Assets/intro_svg.svg';
 import image from '../Assets/favicon.ico';


function MyIntro() {
  const backgroundImageStyle={
    backgroundImage: `url("${intro_svg}")`,
    backgroundSize: 'cover',
  };
  return (
    <>
      <div className="h-screen w-100 grid grid-cols-12" style={backgroundImageStyle}>
        <div className='lg:col-start-4 lg:col-span-9 col-start-1 col-span-12 pl-2 pr-2 pb-0 lg:pb-80 md:pt-24 pt-32 flex lg:flex-row flex-col items-center'>
          <img src={image} className=" flex lg:h-72 lg:w-72 h-48 w-48 rounded-full shadow-2xl" ></img>
          <div className='lg:pl-10 pl-0 text-center lg:text-start'>
            <TypeAnimation
            cursor={false}
            sequence={['Sumedh Sanjay Bengale', 1000]}
            className='md:text-5xl text-3xl text-[#001122] font-arvo'
            ></TypeAnimation>
            <TypeAnimation
            cursor={false}
            sequence={[2000,'Student, currently leaning', 1000,"Student, currently learning Flutter and Web Development"]}
            className='md:text-xl text-md pt-5 text-[#001122] font-arvo'
            ></TypeAnimation>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyIntro