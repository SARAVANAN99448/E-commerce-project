import React from 'react'
import { assets } from "../assets/images/assets"
import { Link } from 'react-router-dom'
const HeroSection = () => {
    return (
        <>

            {/* desktop design */}
            <div className='relative hidden md:block'>
                <div>
                    <img src={assets.hero_img} alt="" />
                </div>
                <div className='absolute top-16 left-20 w-[45vw] flex flex-col gap-4'>
                    <h1 className='text-6xl font-black w-[40vw] font-integral'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className="text-gray-700">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <div>
                        <button className='border border-black px-16 py-4 bg-black text-white rounded-full'><Link to={"/on-sale"}>Shop Now</Link></button>
                    </div>
                    <div className='flex flex-wrap gap-6 font-integral'>
                        <p><span className='text-4xl font-bold'>200+</span> <br />International Brands</p>
                        <p><span className='text-4xl font-bold'>2,000+</span> <br />Hight Quality Products</p>
                        <p><span className='text-4xl font-bold'>30,000+</span> <br />Happy Customers</p>
                    </div>
                </div>
            </div>

            {/* Mobile Design */}
            <div className='sm:hidden bg-gray-100'>
                <div className='flex flex-col gap-4 px-4 pt-2'>
                    <h1 className='text-4xl font-black font-integral mt-4'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className='text-gray-700'>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                        <button className='border border-black px-16 py-4 bg-black text-white rounded-full'><Link to={"/on-sale"}>Shop Now</Link></button>
                    <div className='flex flex-wrap gap-6 font-integral justify-center'>
                        <p><span className='text-2xl font-bold'>200+</span> <br />International Brands</p>
                        <p><span className='text-2xl font-bold'>2,000+</span> <br />Hight Quality Products</p>
                    </div>
                </div>
                <div>
                    <img src={assets.hero_img2} alt="" />
                </div>
            </div>
        </>
    )
}

export default HeroSection