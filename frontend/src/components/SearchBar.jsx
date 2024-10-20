import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FiSearch, FiX } from 'react-icons/fi';

const SearchBar = () => {

    const { showSearch, setShowSearch } = useContext(ShopContext)

    return showSearch ? (
        <div className='border-t border-b bg-gray-50 text-center md:hidden'>
            <div className='flex items-center justify-center'>
                <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
                    <FiSearch className='' />
                    <input className='flex-1 outline-none bg-inherit text-sm pl-4' type="text" placeholder='search' />
                </div>
                <FiX onClick={() => setShowSearch(false)} />
            </div>
        </div>
    ) : null
}

export default SearchBar