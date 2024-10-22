import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom';

const NewArrival = () => {

    const { products } = useContext(ShopContext);
    const [newProducts, setnewProducts] = useState([]);

    useEffect(() => {
        setnewProducts(products.slice(0, 4))
    }, [products])

    return (
        <div className='w-full m-auto md:w-[90%] my-10 border-b-2'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"NEW ARRIVALS"} />
            </div>

            {/* Rendering products */}

            <div className=''>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 p-4 lg:pl-20'>
                    {
                        newProducts.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>
            <div className='w-full m-auto text-center my-8'>
                <Link to='/on-sale'>
                <button className='border border-gray-200 py-4 px-16 rounded-full hover:text-white hover:bg-black transition ease-out '>View All</button>
                </Link>
            </div>
        </div>
    )
}

export default NewArrival