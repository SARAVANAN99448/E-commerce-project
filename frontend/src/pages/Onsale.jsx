import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'
import Breadcrumb from '../components/Breadcrumb';

const Onsale = () => {

    const { products, search } = useContext(ShopContext);
    const [onsaleProducts, setOnsaleProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("most-popular");

    const handleSortChange = (event) => {
        setSortOrder(event.target.value);
    };

    useEffect(() => {
        const searchQuery = typeof search === "string" ? search.toLowerCase() : ""
        // search fuctionality
        let filteredProducts = products.filter((item) => {
            return item.name.toLowerCase().includes(searchQuery);
            
        })
          // Sort products based on sortOrder
          if (sortOrder === "lowToHigh") {
            filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortOrder === "highToLow") {
            filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        }
        filteredProducts = filteredProducts;
        setOnsaleProducts(filteredProducts);
    }, [products, search,sortOrder])


    return (
        <div className='w-full m-auto md:w-[80%] my-10 border-b-2'>
            <Breadcrumb />
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl pl-4 md:pl-20 py-8 font-bold'>Onsale</h1>
                </div>
                <div className='hidden md:block md:pr-20'>
                    <div className='flex text-lg gap-4'>
                        <div className='flex gap-4'>
                            <p className='text-gray-400'>Showing 1-9 of 100 products </p>
                            <select name="" id="" onChange={handleSortChange} value={sortOrder}>
                                <option value="most-popular">sort by: Most Popular</option>
                                <option value="lowToHigh">sort by: Low to High</option>
                                <option value="highToLow">sort by: High to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* Rendering products */}
            <div className=''>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 gap-y-6 p-4 lg:pl-20'>
                    {
                        onsaleProducts.map((item, index) => (
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} pre_price={item.pre_price} discount={item.discount} rating={item.rating} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Onsale