import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const Topselling = () => {

    const { products } = useContext(ShopContext)
    const [topselling, setTopSelling] = useState([])

    useEffect(() => {
        const topProduct = products.filter((item) => (item.topselling))
        setTopSelling(topProduct.slice(0, 4))
    }, [products])

    return (
        <div className='w-full m-auto md:w-[90%] my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'TOP SELLING'} />
            </div>
            <div className=''>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 p-4 lg:pl-20'>
                    {
                        topselling.map((item, index) => (
                            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} pre_price={item.pre_price} discount={item.discount} rating={item.rating}/>
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

export default Topselling