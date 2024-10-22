import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Breadcrumb from '../components/Breadcrumb';

const Onsale = () => {

    const { products } = useContext(ShopContext);
    const [onsaleProducts, setOnsaleProducts] = useState([]);

    useEffect(() => {
        setOnsaleProducts(products.slice(0, 10))
    }, [products])

    return (
        <div className='w-full m-auto md:w-[80%] my-10 border-b-2'>
            <Breadcrumb />
            <div>
                <h1 className='text-3xl pl-4 md:pl-20 py-8 font-bold'>Onsale</h1>
            </div>
            {/* Rendering products */}
            <div className=''>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-6 p-4 lg:pl-20'>
                    {
                        onsaleProducts.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Onsale