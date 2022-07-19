import React from 'react'

function Stats() {
  return (
    <>
        <div className='flex justify-center items-center bg-[#4f4f4f]'><div className='h-1 w-32 text-[#4f4f4f] bg-white'>-----</div></div>
        <div className='bg-[#4f4f4f]'>
          <div className='text-center w-screen lg:text-6xl pb-20 text-4xl text-white hover:scale-105 transition ease-out pt-10 font-extrabold '>Stats</div>
            <iframe title='Profile Details' className='h-full w-full flex justify-center p-2' src='http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=SumedhBengale&theme=monokai'></iframe>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-2 pt-10 pb-10'>
                <div className='w-full h-full flex lg:justify-end justify-center'><iframe title='Repos per Language' className='h-full' src='http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=SumedhBengale&theme=monokai'></iframe></div>
                <div className='w-full h-full flex lg:justify-start justify-center'><iframe title='Most Commited Language' className='h-full' src='http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=SumedhBengale&theme=monokai'></iframe></div>
                <div className='w-full h-full flex lg:justify-end justify-center'><iframe title='Statistics' className='h-full' src='http://github-profile-summary-cards.vercel.app/api/cards/stats?username=SumedhBengale&theme=monokai'></iframe></div>
                <div className='w-full h-full flex lg:justify-start justify-center'><iframe title='Productive Time' className='h-full' src='http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=SumedhBengale&theme=monokai'></iframe></div>
            </div>
        </div>
    </>
  )
}

export default Stats