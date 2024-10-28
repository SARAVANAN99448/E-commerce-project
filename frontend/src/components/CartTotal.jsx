import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FiTag } from 'react-icons/fi';
import { useState } from 'react';

const CartTotal = () => {

    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    const [promoCode, setPromoCode] = useState('');

    const handleInputChange = (e) => {
        setPromoCode(e.target.value);
    };

    const applyPromoCode = () => {
        console.log('Promo code applied:', promoCode);
    };

    return (
        <div className='w-full'>
            <div className='text-2xl font-bold py-4'>
                <h1>Order Summary</h1>
            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency} {getCartAmount()}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p>Delivery Fee</p>
                    <p>{currency} {delivery_fee}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                    {/* Promo Code Input */}
                    <div className="flex flex-1 items-center bg-gray-100 text-gray-500 px-4 py-4 rounded-full">
                        <FiTag className="mr-2" />
                        <input
                            type="text"
                            value={promoCode}
                            onChange={handleInputChange}
                            placeholder="Add promo code"
                            className="bg-transparent outline-none"
                        />
                    </div>
                    <button className="bg-black text-white px-6 py-4 rounded-full"onClick={applyPromoCode}>Apply</button>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
