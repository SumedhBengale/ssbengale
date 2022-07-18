import React from 'react'

function Grocery() {
    return (
      <div class="card lg:card-side lg:w-2/3 md:w-2/3 w-full transition ease-out hover:scale-105 hover:-translate-y-3 bg-[#7a9b55] shadow-xl">
          <a data-flickr-embed="true" className='p-5' href="https://www.flickr.com/photos/196134043@N08/52219936793/in/dateposted-public/" title="grocery"><img className='w-full rounded-lg object-cover h-full aspect-video' src="https://live.staticflickr.com/65535/52219936793_7abf5b1451_c.jpg" width="800" height="450" alt="grocery"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
            <div class="card-body py-3 px-2 lg:p-5 w-full">
            <h2 class="text-2xl text-start">Grocery Shopping Site</h2>
            <p className='lg:text-md text-xs text-start'>This is my 4th Semester Python group Project made in Django.</p>
            <p className='lg:text-md text-xs text-start'>This site is only the frontend, which only consists of user authentication and catalog of groceries.</p>
            <p className='lg:text-md text-xs text-start'>The user can log into the site and add groceries to their cart and proceed to the checkout stage.</p>
            <p className='lg:text-md text-xs text-start'>The grocery inventory data is fetched from a Firebase database.</p>
            <p className='lg:text-md text-xs text-start'>The tech stack for this project was- Django, Firebase and Bootstrap.</p>
            <p className='lg:text-md text-xs text-start'>For this project, I worked on all the aspects of the website.</p>
              <div class="grid grid-cols-2 lg:gap-5 lg:pt-5">
                  <div className='flex justify-start items-center '>
                  <div class="group btn lg:btn-md btn-sm bg-black hover:bg-[#7a9b55]" onClick={()=> window.open("https://github.com/SumedhBengale/OnlineShoppingSite.git", "_blank")}>
                  <i class="devicon-github-original text-2xl pr-2 group-hover:text-white"></i>
                  <div className='group-hover:text-white'>Github</div>
                  </div>
                  </div>
                  <div className='flex justify-end items-start p-2 gap-5'>
                  <i class="devicon-django-plain colored 2xl"></i>
                  <i class="devicon-firebase-plain colored text-2xl"></i>
                  <i class="devicon-bootstrap-plain colored 2xl"></i>

                  </div>
              </div>
            </div>
          </div>
      )
}

export default Grocery