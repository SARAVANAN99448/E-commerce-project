import { createContext } from "react";
import { products } from "../assets/images/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = "$";
    const devlivery_fee = 10
    
    const value = {
        products , currency , devlivery_fee
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider