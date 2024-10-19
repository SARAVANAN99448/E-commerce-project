import React, { useState } from 'react'
import { useEffect } from 'react'
import { products } from '../assets/images/assets'


const Product = () => {
    const [casualdress, setcasual] = useState([])

    const renderstars = (rating) => {
        let stars = []
        const fullstar = Math.floor(rating)
        const halfstar = rating % 1 !== 0

        for (let i = 0; i < fullstar; i++) {
            stars.push(<i key={i} className="mr-1 fa-solid fa-star text-yellow-400" ></i>)
        }
        if (halfstar) {
            stars.push(<i key={fullstar} className="mr-1 fa-solid fa-star-half text-yellow-400" ></i>)
        }
        return stars;
    }

    useEffect(() => {
        const casualstyle = products.filter((item) => (item.casualdress))
        setcasual(casualstyle)

    }, [])
    return (
        <section>
            <div>
                <div>
                    <h1 className='text-3xl font-bold pl-10 mt-5'>Casual</h1>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 gap-y-6 p-4 lg:pl-20 mt-10'>
                    {
                        casualdress.map(function (item) {
                            return (<>
                                <div>
                                    <img src={item.image} alt="" className='w-72 rounded-3xl  transition ease-in-out' />
                                    <h1 className='text-xl font-bold mt-2'>{item.name}</h1>
                                    <div className='flex gap-2 items-center mt-2'>
                                        {renderstars(item.rating)}
                                        <p className='font-semibold text-xl'>{item.rating}</p>
                                    </div>
                                    <div className='flex gap-3 mt-2 items-center'>
                                        <h1 className='font-semibold text-xl'>${item.price}</h1>
                                        <h1 className='font-semibold text-xl line-through text-[#999999]'>{item.pre_price}</h1>
                                        <div className='bg-[#FFEBEB] rounded-md flex items-center '>
                                        <h1 className='text-[#FF3333] p-0.5'>{item.discount}</h1>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Product