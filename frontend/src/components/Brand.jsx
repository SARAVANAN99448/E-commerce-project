import React from 'react'
import { assets } from '../assets/images/assets'

const Brand = () => {
    return (
        <>
            <div>
                <div className='bg-black flex flex-wrap justify-evenly items-center gap-6 py-6 px-6'>
                    <img src={assets.brandlogo1} alt="" className='w-16 h-4 ' />
                    <img src={assets.brandlogo2} alt="" className='w-16 h-4' />
                    <img src={assets.brandlogo3} alt="" className='w-16 h-4' />
                    <img src={assets.brandlogo4} alt="" className='w-16 h-4' />
                    <img src={assets.brandlogo5} alt="" className='w-16 h-4' />
                </div>
            </div>
        </>
    )
}

export default Brand