import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'

const Casuals = () => {

    const { products } = useContext(ShopContext);
    const [casualProduct, setCasualProduct] = useState([]);

    useEffect(() => {
        const categoryCasual = products.filter((item) => item.category === "casual")
        setCasualProduct(categoryCasual.slice(0, 9))
    }, [])

    return (
        <div className='w-full md:w-[80%] m-auto my-10'>
            <div className='text-lg font-sans text-gray-600 font-medium pl-4 md:pl-20 pb-6'>
                <p>
                    {`Home > Casual`}
                </p>
            </div>
            <div className='text-4xl font-bold pl-4 md:pl-20 pb-4'>
                <h1>Casual</h1>
            </div>
            {/* Rendering products */}
            <div className=''>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 gap-y-6 p-4 lg:pl-20'>
                    {
                        casualProduct.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Casuals