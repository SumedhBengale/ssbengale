import React from 'react'

function Lakshya() {
  return (
    <div class="card w-5/6 bg-base-100 shadow-xl">
    <a data-flickr-embed="true" className='p-5' href="https://www.flickr.com/photos/196134043@N08/52217011732/" title="Lakshya"><img src="https://live.staticflickr.com/65535/52217011732_92ec5d5a06_c.jpg" className='w-full rounded-lg object-cover aspect-video' alt="Lakshya"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
    
    <div class="card-body w-full py-3">
      <h2 class="text-2xl text-start">Lakshya</h2>
      <p className='lg:text-md text-xs text-start'>This was the first proper website that was created by our 3 person group for our 3rd Semester Mini Project.</p>
      <p className='lg:text-md text-xs text-start'>Lakshya is an online learning portal where the user can find hand-picked playlists of Youtube videos that they can view to learn about any topic.</p>
      <p className='lg:text-md text-xs text-start'>Lakshya also has proper authentication and Google Meet Integration.</p>
      <p className='lg:text-md text-xs text-start'> The tech stack for Lakshya consisted of- React, Material UI and Firebase</p>
      <p className='lg:text-md text-xs text-start'>I personally worked on the Firebase Integration, Authentication and the User Interface.</p>
      <div class="grid grid-cols-2">
        <div className='flex justify-start'>
        <div class="btn bg-[#001122] hover:bg-[#4facf7] hover:text-[#001122]">Live Website</div>
        <div class="btn btn-lg btn-circle btn-ghost bg-transparent flex items-start pt-2 hover:bg-white">
        <i class="devicon-github-original colored text-2xl"></i>
        </div>
        </div>
        <div className='flex justify-end items-start p-2 gap-5'>
        <i className="devicon-react-original colored text-2xl"></i>
        <i class="devicon-materialui-plain colored text-2xl"></i>
        <i class="devicon-firebase-plain colored text-2xl"></i>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Lakshya