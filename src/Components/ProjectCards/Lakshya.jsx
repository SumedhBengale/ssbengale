import React from 'react'

function Lakshya() {
  return (
    <div class="card lg:card-side lg:w-2/3 md:w-2/3 w-full transition ease-out hover:scale-105 hover:-translate-y-3 bg-[#cac8f9] shadow-xl">
    <a data-flickr-embed="true" className='p-5' href="https://www.flickr.com/photos/196134043@N08/52219791839/in/dateposted-public/" title="Lakshya"><img className='w-full rounded-lg object-cover h-full aspect-video' src="https://live.staticflickr.com/65535/52219791839_f77c2fcb09_c.jpg" width="800" height="390" alt="Lakshya"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>    
          <div class="card-body py-3 px-2 lg:p-5 w-full">
          <h2 class="text-2xl text-start">Lakshya</h2>
        <p className='lg:text-md text-xs text-start'>This was the first proper website that was created by our 3 person group for our 3rd Semester Mini Project.</p>
        <p className='lg:text-md text-xs text-start'>Lakshya is an online learning portal where the user can find hand-picked playlists of Youtube videos that they can view to learn about any topic.</p>
        <p className='lg:text-md text-xs text-start'>Lakshya also has proper authentication and Google Meet Integration.</p>
        <p className='lg:text-md text-xs text-start'> The tech stack for Lakshya consisted of- React, Material UI and Firebase.</p>
        <p className='lg:text-md text-xs text-start'>I personally worked on the Firebase Integration, Authentication and parts of the User Interface.</p>
            <div class="grid grid-cols-2 lg:gap-5 lg:pt-5">
                <div className='flex justify-start items-center '>
                <div class="group btn lg:btn-md btn-sm bg-black hover:bg-[#cac8f9]" onClick={()=> window.open("https://github.com/SumedhBengale/lakshya.git", "_blank")}>
                <i class="devicon-github-original text-2xl pr-2 group-hover:text-white"></i>
                <div className='group-hover:text-white'>Github</div>
                </div>
                </div>
                <div className='flex justify-end items-start p-2 gap-5'>
                <i class="devicon-react-original colored 2xl"></i>
                <i class="devicon-materialui-plain colored 2xl"></i>
                <i class="devicon-firebase-plain colored text-2xl"></i>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Lakshya
