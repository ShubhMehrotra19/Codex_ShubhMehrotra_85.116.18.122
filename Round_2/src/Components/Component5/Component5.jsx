import React from 'react'
import Card from './Card'

function Component5() {
    const name = ['Amelia Joseph', 'Jacob Joshua', 'Pareeniti Chopra']
    const position = ['Chief Manager', 'Chief Manager', 'Chief Manager']
    return (
        <>
        <div className='flex flex-col justify-start items-center mb-20 '>
            <div className='flex justify-between items-center gap-5'>
            <div className="text-black text-6xl font-medium font-serif capitalize mb-8">What Our Client Said about us</div>
            <img className=' scale-90' src="/images/buttons.png" alt="" />
            </div>
            <div className='flex gap-6'>
            {name.map((name, index) => {
                return <Card key={index} name={name} position={position[index]} />
})}
            </div>
        </div>
        </>
    )
}

export default Component5
