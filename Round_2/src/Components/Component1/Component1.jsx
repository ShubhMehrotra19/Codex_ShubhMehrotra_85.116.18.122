import React from 'react'
import './Component1.css'

function Component1() {
    return (
        <section className='flex justify-between items-center mx-20 mb-10'>
        <div className='flex flex-col'>
        <div className="text-black text-7xl font-bold font-['Bricolage Grotesque'] capitalize mb-9">Unlock business <br />& performance <br /> insights</div>
        <div className="text-black text-opacity-60 text-xl font-medium font-['Bricolage Grotesque'] mb-16">We care about our work and we care about our clients.</div>
        <div className='flex justify-start items-center gap-7'>
        <div  className="w-80 h-12 px-4 py-5 bg-neutral-50 rounded-3xl border border-black border-opacity-20 justify-start items-center gap-2.5 inline-flex text-neutral-400 text-md font-normal font-['Bricolage Grotesque'] capitalize">Enter your email</div>
        <div className="w-36 h-12 px-6 py-5 bg-blue-600 hover:scale-105 hover:bg-blue-700 rounded-3xl justify-center items-center gap-2.5 inline-flex text-white text-md font-normal font-['Lets Talk</div>'] capitalize">Lets Talk</div>
        </div>
        </div>
        <img className=' scale-95' src="/images/Image.png" alt="" />
        </section>
    )
}

export default Component1

