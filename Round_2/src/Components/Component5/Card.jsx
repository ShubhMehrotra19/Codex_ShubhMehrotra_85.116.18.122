import React from 'react'

function Card({name, position}) {
    return (
        <>
        <div className='shadow-md w-96 h-80 hover:bg-blue-700 hover:text-white p-5 flex flex-row justify-start items-center rounded-md'>
            <div className='flex gap-3 flex-col justify-start'>
                <div className='flex gap-3 justify-start items-center'>
                <img className=' rounded-full h-8 w-8 object-cover' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className='flex flex-col mb-3'>
                    <p className=' text-3xl font-medium'>{name}</p>
                    <div className=" text-xl font-normal capitalize">{position}</div>
                </div>
                </div>
                <div className=' text-opacity-80 text-base font-normal'>
                My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.
                </div>
            </div>
        </div>
        </>
    )
}

export default Card
