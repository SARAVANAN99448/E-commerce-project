import { useState } from "react"
const Discount =()=>{
    const [discount,setdiscount]=useState(true)
    const handlediscount = ()=>{
        setdiscount(false)
    }
    return(<>
    <section>
        <div className="bg-[#000000] text-white flex items-center justify-evenly">
           
            {
                discount ? <><h1 className="p-5">Sign up and get 20% off to yout first order. <span className="underline">Sign Up Now</span></h1>
            <p className="cursor-pointer" onClick={handlediscount}>X</p></>:""
            }
        </div>
    </section>
    </>)

}
export default Discount