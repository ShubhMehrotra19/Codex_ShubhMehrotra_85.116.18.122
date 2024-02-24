import React from 'react'

const Solutions = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
        <div className='flex justify-start py-8'>
            <div className='h-16 w-3/4 '>
                <img src="/images/sol1.png" alt="" />
            </div>
            <div className='flex flex-col justify-between gap-12 items-center'>
                <div className='items-center'>
                    <p className='font-bold text-4xl'>Context That Changes Everything</p>
                </div>
                <div className='text-light text-lg text-ellipsis'>
                    <p className='text-wrap'>Business iQ is a powerful way to see your data through the lens of business impact.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solutions