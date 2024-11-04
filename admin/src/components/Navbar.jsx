import React from 'react'

const Navbar = ({ setToken }) => {
    return (
        <div className='flex items-center py-2 px-[4%] bg-black text-white justify-between'>
            <h1 className='text-3xl font-black py-3'>SHOP.CO</h1>
            <p className='hidden md:block'>ADMIN PANEL</p>
            <button onClick={() => setToken('')} className='bg-white text-black px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
        </div>
    )
}

export default Navbar