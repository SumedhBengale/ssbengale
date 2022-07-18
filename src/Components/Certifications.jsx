import React from 'react'

function Certifications() {
  return (
    <>
    <div className='bg-[#4f4f4f]'>
    <div className='flex justify-center items-center bg-[#4f4f4f]'><div className='h-1 w-32 text-[#4f4f4f] bg-white'>-----</div></div>

      <div className='text-center w-screen lg:text-6xl pb-20 text-4xl text-white font-extrabold hover:scale-105 transition ease-out pt-10 '>
        Certifications
      </div>
        <div className='flex justify-center p-5'>
            <div className='grid md:grid-cols-3 grid-cols-1 lg:w-2/3 w-full rounded-box bg-[#4f4f4f]'>
                <div className='md:text-xl text-xl p-5 text-center flex justify-center items-center font-extrabold text-white'>Verzeo: Django with MongoDB Internship/Training </div>
                <div className='w-full flex justify-center p-5 hover:scale-105 transition ease-out'><a data-flickr-embed="true" href="https://www.flickr.com/photos/196134043@N08/52220898687/in/dateposted-public/" title="1085838558"><img className='rounded-box h-48' src="https://live.staticflickr.com/65535/52220898687_db6e1566f5_c.jpg" width="800" height="621" alt="1085838558"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script></div>
                <div className='w-full flex justify-center p-5 hover:scale-105 transition ease-out'><a data-flickr-embed="true" href="https://www.flickr.com/photos/196134043@N08/52221923003/in/dateposted-public/" title="3944991653"><img className='rounded-box h-48' src="https://live.staticflickr.com/65535/52221923003_ef5c6ed310_c.jpg" width="800" height="565" alt="3944991653"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script></div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Certifications