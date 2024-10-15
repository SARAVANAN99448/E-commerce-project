import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const NewArrival = () => {

    const {products} = useContext(ShopContext);
    const [newProducts, setnewProducts] = useState([]);

    useEffect(()=>{
        setnewProducts(products.slice(0,4))
    },[products])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={"NEW ARRIVALS"} />
            </div>

        {/* Rendering products */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 p-4 lg:pl-20'>
            {
                newProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
            </div>
        </div>
    )
}

export default NewArrival