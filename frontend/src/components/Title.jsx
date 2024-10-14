import React from 'react'

const Title = ({text1}) => {
    return (
        <div className='inline-flex gap-2 items-center mb-3'>
            <p className='text-black font-black text-3xl md:text-5xl'>{text1}</p>
        </div>
    )
}

export default Title