import { createContext, useState } from "react";
import { products } from "../assets/images/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const delivery_fee = 10
    const [showSearch, setShowSearch] = useState(false)
    
    const value = {
        products , currency , delivery_fee,
        showSearch, setShowSearch
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider