import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Breadcrumb from '../components/Breadcrumb';

const Party= () => {

    const { products } = useContext(ShopContext);
    const [partyProduct, setPartyProduct] = useState([]);

    useEffect(() => {
        const categoryParty = products.filter((item) => item.category === "party")
        setPartyProduct(categoryParty.slice(0, 9))
    }, [products])

    return (
        <div className='w-full md:w-[80%] m-auto my-10'>
            <Breadcrumb/>
            <div>
                <h1 className='text-3xl pl-4 md:pl-20 py-8 font-bold'>Party</h1>
            </div>
            {/* Rendering products */}
            <div className=''>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 gap-y-6 p-4 lg:pl-20'>
                    {
                        partyProduct.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Party