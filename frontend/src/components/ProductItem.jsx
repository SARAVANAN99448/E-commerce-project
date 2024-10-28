import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext)

    return (
        <div>

            <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
                <div className='overflow-hidden'>
                    <img className='w-60 rounded-3xl hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
                </div>
                <p className='pt-3 pb-1 text-sm font-bold'>{name}</p>
                <p className='text-sm'><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star-half text-yellow-400" ></i>4.5/5</p>
                <p className='text-lg font-bold pt-1'>{currency}{price}</p>
            </Link>

        </div>
    )
}

export default ProductItem