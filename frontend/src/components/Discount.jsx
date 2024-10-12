import { useState } from "react"
const Discount = () => {
    const [discount, setdiscount] = useState(true)
    const handlediscount = () => {
        setdiscount(false)
    }
    return (<>
        <section>
            <div className="bg-[#000000] text-white flex items-center justify-evenly">

                {
                    discount ? <><h1 className="p-3">Sign up and get 20% off to yout first order. <span className="underline">Sign Up Now</span></h1>
<<<<<<< HEAD
                        <p className="cursor-pointer" onClick={handlediscount}>X</p></> : ""
=======
                        <p className="cursor-pointer" onClick={handlediscount}>&times;</p></> : ""
>>>>>>> 1b2568b9061b5f3a4f6747d35c2d21de48f9dd09
                }
            </div>
        </section>
    </>)

}
export default Discount