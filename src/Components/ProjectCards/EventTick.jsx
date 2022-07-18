import React from 'react'

function EventTick() {
    return (
      <div class="card lg:card-side lg:w-2/3 md:w-2/3 w-full transition ease-out hover:scale-105 hover:-translate-y-3 bg-[#74abf1] shadow-xl">
          <a data-flickr-embed="true" className='p-5' href="https://www.flickr.com/photos/196134043@N08/52219828503/in/dateposted-public/" title="EventTick"><img className='w-full rounded-lg object-cover h-full aspect-video' src="https://live.staticflickr.com/65535/52219828503_5132a13182_c.jpg" width="800" height="386" alt="EventTick"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            <div class="card-body py-3 px-2 lg:p-5 w-full">
            <h2 class="text-2xl text-start">EventTick</h2>
            <p className='lg:text-md text-xs text-start'>This website was created by our group for our 4rd Semester Mini Project.</p>
            <p className='lg:text-md text-xs text-start'>EventTick is a platform we made for our college to make it easier for them to organize and keep track of events.</p>
            <p className='lg:text-md text-xs text-start'>It can also help students and attendees to be up to date with different events and their schedules.</p>
            <p className='lg:text-md text-xs text-start'>If the Logged In user is an Admin then the controls for adding/updating events and posters are given to him/her, the normal user can only see events and not modify them.</p>
            <p className='lg:text-md text-xs text-start'>The tech stack for this project was- React, MongoDB, and Tailwind.</p>
            <p className='lg:text-md text-xs text-start'>For this project, I worked on the User Interface and the Event Form for the Admin.</p>
              <div class="grid grid-cols-2 lg:gap-5 lg:pt-5">
                  <div className='flex justify-start items-center '>
                  <div class="group btn lg:btn-md btn-sm bg-black hover:bg-[#74abf1]" onClick={()=> window.open("https://github.com/SumedhBengale/event-tick.git", "_blank")}>
                  <i class="devicon-github-original text-2xl pr-2 group-hover:text-white"></i>
                  <div className='group-hover:text-white'>Github</div>
                  </div>
                  </div>
                  <div className='flex justify-end items-start p-2 gap-5'>
                  <i class="devicon-react-original colored 2xl"></i>
                  <i class="devicon-mongodb-plain colored 2xl"></i>
                  <i class="devicon-tailwindcss-plain colored 2xl"></i>


                  </div>
              </div>
            </div>
          </div>
      )
}

export default EventTick