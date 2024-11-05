import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price, pre_price, discount, rating }) => {

    const { currency } = useContext(ShopContext);
    const parsedRating = parseFloat(rating) || 0;
    const fullstars = Math.floor(parsedRating);
    const halfstar = parsedRating % 1 == 0;

    return (
        <div>

            <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
                <div className='overflow-hidden'>
                    <img className='w-60 rounded-3xl hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
                </div>
                <p className='pt-3 pb-1 text-sm font-bold'>{name}</p>
                {/* Dynamic Star Rating */}
                <div className='text-sm flex items-center'>
                    {[...Array(fullstars)].map((_, index) => (
                        <i key={index} className="mr-1 fa-solid fa-star text-yellow-400"></i>
                    ))}
                    {!halfstar && <i className="mr-1 fa-solid fa-star-half text-yellow-400"></i>}
                    <span>{parsedRating}/5</span>
                </div>
                <div className='flex gap-2'>
                    <p className='text-lg font-bold pt-1'>{currency}{price}</p>
                    <p className='text-lg font-bold pt-1 line-through text-[#999999]'>{pre_price}</p>
                    <div className='bg-[#FFEBEB] text-[#FF7878] rounded-md flex justify-center items-center mt-1 '>
                        <p className='text-sm font-bold pt-0.5'>{discount}</p>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default ProductItem