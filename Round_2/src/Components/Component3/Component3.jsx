import React from 'react'

function Component3() {
  return (
    <section className='mb-20 border-b-2 border-t-2 border-slate-300 rounded-xl py-9'>
        <div className="flex justify-between px-10 py-8">
            <div className=" flex flex-col items-center justify-between w-1/2" >
                <div className="flex justify-between gap-20">
                    <div className="flex flex-col gap-20">
                        <div className='flex flex-col'>
                            <p className="font-bold text-5xl">145%</p>
                            <p className='text-[10px] text-black'>More revenues for the brand</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-5xl'>50+</p>
                            <p className='text-[10px] text-black'>Brands trust us</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-20'>
                        <div className='flex flex-col'>
                            <p className="font-bold text-5xl">100K+</p>
                            <p className='text-[10px] text-black'>Audience Reached</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold text-5xl'>25+</p>
                            <p className='text-[10px] text-black'>Worldwide Awards</p>
                        </div>
                    </div>
                </div>
            </div >
            <div className='flex flex-col gap-4 justify-center'>
                <p className="font-semibold text-5xl">
                    Commitments
                </p>
                <p className='font-light text-wrap'>
                We are committed to working with you collaboratively to understand your goals and create <br /> a strategy that will achieve them.
                </p>
                <div className="mt-10">
                    <button className='text-blue-500'>Learn More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Component3;