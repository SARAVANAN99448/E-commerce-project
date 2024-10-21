import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';

const Product = () => {

    const { productID } = useParams()
    console.log(productID);

    const { products, currency } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('')
    const [size, setSize] = useState('')

    const fetchProductData = async () => {

        products.map((item) => {
            if (item._id === productID) {
                setProductData(item)
                setImage(item.image[0])
                return null;
            }
        })

    }

    useEffect(() => {
        fetchProductData();
    }, [productID, products])

    return productData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 w-full m-auto md:w-[90%] px-4'>
            {/*----------- Product Data-------------- */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                {/*---------- Product Images------------- */}
                <div className='flex-1 flex flex-col-reverse gap-6 md:gap-0 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-evenly sm:justify-normal sm:w-[17.8%] w-full'>
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-[70%] m-auto h-auto' src={image} alt="" />
                    </div>
                </div>

                {/* -------- Product Info ---------- */}
                <div className='flex-1'>
                    <h1 className='font-black text-2xl md:text-3xl mt-2'>{productData.name}</h1>
                    <p className='text-sm pt-4'><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star-half text-yellow-400" ></i>4.5/5</p>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Choose Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button onClick={() => setSize(item)} className={`border rounded-full py-2 px-4 bg-gray-100 ${item === size ? 'bg-gray-900 text-white' : ''}`} key={index}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <hr className='my-8 sm:w-4/5' />
                    <div className='flex justify-between md:mr-32'>
                        <div className='flex  border-none px-6 py-2 bg-gray-200 rounded-full text-2xl items-center gap-8 '>
                            <p>-</p>
                            <p>1</p>
                            <p>+</p>
                        </div>
                        <div>
                            <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-12 md:px-24 rounded-full py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <div className=' opacity-0'></div>
}

export default Product
