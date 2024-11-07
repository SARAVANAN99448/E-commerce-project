import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Breadcrumb from '../components/Breadcrumb';

const Party = () => {

    const { products, search } = useContext(ShopContext);
    const [partyProduct, setPartyProduct] = useState([]);

    useEffect(() => {
        const searchQuery = typeof search === "string" ? search.toLowerCase() : ""
        const categoryParty = products.filter((item) => item.category === "Party" &&
            item.name && item.name.toLowerCase().includes(searchQuery))
        setPartyProduct(categoryParty.slice(0, 9))
    }, [products, search])


    return (
        <div className='w-full md:w-[80%] m-auto my-10'>
            <Breadcrumb />
            <div>
                <h1 className='text-3xl pl-4 md:pl-20 py-8 font-bold'>Party</h1>
            </div>
            {/* Rendering products */}
            <div className=''>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 gap-y-6 p-4 lg:pl-20'>
                    {
                        partyProduct.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} pre_price={item.pre_price} discount={item.discount} rating={item.rating} />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Party