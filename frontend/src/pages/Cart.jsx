import React from 'react'
import Title from '../components/Title'
import { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { RiDeleteBin6Fill, } from "react-icons/ri";
import CartTotal from '../components/CartTotal';
import { FiArrowRight } from "react-icons/fi";

const Cart = () => {

    const { products, currency, navigate, cartItems, updateQuantity } = useContext(ShopContext);

    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = []
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    })
                }
            }
        }
        setCartData(tempData)
    }, [cartItems])

    return (
        <div className='border-t pt-14 w-[90%] md:w-[80%] m-auto'>

            <div className='text-2xl mb-3'>
                <h1 className='font-black text-[20px] md:text-3xl pb-4'>YOUR CART</h1>
            </div>

            <div className='flex md:flex-1 flex-wrap gap-8 md:gap-12 justify-between'>
                <div className='w-full md:w-[50%] '>
                    {cartData.map((item, index) => {

                        const productData = products.find((product) => product._id === item._id);

                        return (
                            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                                <div className='flex items-start gap-6'>
                                    <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                                    <div>
                                        <p className='text-xs sm:text-lg font-bold'>{productData.name}</p>
                                        <p className='text-[10px] pt-2'><span className='font-bold'>size: </span>{ item.size}</p>
                                        <div className='flex items-center gap-5 mt-2'>
                                            <p>{currency}{productData.price}</p>
                                        </div>
                                    </div>
                                </div>
                                <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity} />
                                <RiDeleteBin6Fill onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 text-2xl mr-4 sm:w-5 cursor-pointer text-red-500' />
                            </div>
                        )
                    })}
                </div>

                <div className='flex-1 w-[450px]'>
                    <div className='w-full'>
                        <div className=''>
                            <CartTotal />
                            <div className='w-full flex justify-end'>
                                <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm w-full text-center my-8 px-8 py-4 flex justify-center rounded-full items-center gap-4'>Go to Checkout <FiArrowRight /></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cart