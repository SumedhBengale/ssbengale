import React from 'react'

function ScreenSort() {
  return (
    <div class="card lg:card-side lg:w-2/3 md:w-2/3 w-full transition ease-out hover:scale-105 hover:-translate-y-3 bg-[#00907f] shadow-xl">
            <a data-flickr-embed="true" className='p-5' href="https://www.flickr.com/photos/196134043@N08/52220611417/in/dateposted-public/" title="ScreenSort"><img className='w-full rounded-lg object-cover h-full aspect-video' src="https://live.staticflickr.com/65535/52220611417_40949628b4_c.jpg" width="800" height="450" alt="ScreenSort"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>            <div class="card-body py-3 px-2 lg:p-5 w-full">
            <h2 class="text-2xl text-start">ScreenSort</h2>
            <p className='lg:text-md text-xs text-start'>This is another personal project I made in Flutter.</p>
            <p className='lg:text-md text-xs text-start'>ScreenSort helps the user to sort screenshots into different folders or collections.</p>
            <p className='lg:text-md text-xs text-start'>For that I employed a foreground service and a file watcher in the base screenshot directory.</p>
            <p className='lg:text-md text-xs text-start'>Whenever you take a screenshot the sorting window pops up instantly and asks the user to add the screenshot to any given folder.</p>
            <p className='lg:text-md text-xs text-start'>The tech stack for this project was- Flutter and SQLite.</p>
            <p className='lg:text-md text-xs text-start'>I worked on all aspects of this app.</p>
              <div class="grid grid-cols-2 lg:gap-5 lg:pt-5">
                  <div className='flex justify-start items-center '>
                  <div class="group btn lg:btn-md btn-sm bg-black hover:bg-[#00907f]" onClick={()=> window.open("https://github.com/SumedhBengale/screen_sort.git", "_blank")}>
                  <i class="devicon-github-original text-2xl pr-2 group-hover:text-white"></i>
                  <div className='group-hover:text-white'>Github</div>
                  </div>
                  </div>
                  <div className='flex justify-end items-start p-2 gap-5'>
                  <i class="devicon-flutter-plain colored text-2xl"></i>
                  <i class="devicon-sqlite-plain 2xl"></i>
                  </div>
              </div>
            </div>
          </div>
  )
}

export default ScreenSort