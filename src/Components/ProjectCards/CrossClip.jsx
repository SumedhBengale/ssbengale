import React from 'react'

function CrossClip() {
  return (
    <div class="card lg:card-side lg:w-2/3 md:w-2/3 w-full transition ease-out hover:scale-105 hover:-translate-y-3 bg-[#f8de7e] shadow-xl">
            <a data-flickr-embed="true" className='p-5' href="https://www.flickr.com/photos/196134043@N08/52220005133/in/dateposted-public/" title="CrossClip"><img className='w-full rounded-lg object-cover h-full aspect-video' src="https://live.staticflickr.com/65535/52220005133_2dd35d411e_c.jpg" width="800" height="447" alt="CrossClip"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
          <div class="card-body py-3 px-2 lg:p-5 w-full">
            <h2 class="text-2xl text-start">Cross Clip</h2>
            <p className='lg:text-md text-xs text-start'>This is a solo project made in Flutter.</p>
            <p className='lg:text-md text-xs text-start'>With Cross Clip, the user can send text and files between their Android and Windows devices over the local network.</p>
            <p className='lg:text-md text-xs text-start'>For sharing files, the file's and the sender's information is shared in real-time using a Firebase database.</p>
            <p className='lg:text-md text-xs text-start'>The sender opens a TCP port and the reciever sends a request for the file to the same port.</p>
            <p className='lg:text-md text-xs text-start'>The tech stack for this project was- Flutter and Firebase</p>
            <p className='lg:text-md text-xs text-start'>There are Windows and Android clients avaliable for the App</p>
            <p className='lg:text-md text-xs text-start'>I was the single developer for this project.</p>
            <div class="grid grid-cols-2 lg:gap-5 lg:pt-5">
                <div className='flex justify-start items-center '>
                <div class="group btn lg:btn-md btn-sm bg-black hover:bg-[#f8de7e]"onClick={()=> window.open("https://github.com/SumedhBengale/crossclip.git", "_blank")}>
                <i class="devicon-github-original text-2xl pr-2 group-hover:text-white"></i>
                <div className='group-hover:text-white'>Github</div>
                </div>
                </div>
                <div className='flex justify-end items-start p-2 gap-5'>
                <i class="devicon-flutter-plain colored text-2xl"></i>
                <i class="devicon-firebase-plain colored text-2xl"></i>
                </div>
            </div>
          </div>
        </div>
  )
}

export default CrossClip