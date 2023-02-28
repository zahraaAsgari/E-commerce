import React,{useCallback} from 'react';



const Hero = () => {
  return (
    <section className="bg-banner bg-no-repeat bg-center bg-cover relative py-24 h-[700px]  ">
      <div className='lg:w-[600px] w-[500px] absolute lg:top-[100px] lg:right-[220px] flex justify-center items-center lg:block  p-5'>
       <div className='flex items-start justify-start flex-col '>
<div className='flex gap-1 items-center justify-center'>
<div className='w-[40px] border-b-2 border-red-600 mt-[10px]'></div>
<div className='font-semibold text-lg'>New Trend</div>
</div>
<div>
  <div className=' text-[90px] text-primary uppercase font-light -mt-1'>big sale</div>
  <div className='uppercase font-bold text-[95px]'>big sale</div>
  <div className='text-xl mt-2'>𝓾𝓷𝓵𝓸𝓬𝓴 𝔂𝓸𝓾𝓻 𝓼𝓽𝔂𝓵𝓮</div>
</div>
<button className='border-2 px-3 py-[0.65rem] text-sm font-semibold rounded-md mt-2 -mr-2 border-pink-800 hover:bg-pink-600 transition-all duration-200 '>Discover More...</button>
       </div>
      </div>

    </section>
  )
}

export default Hero
