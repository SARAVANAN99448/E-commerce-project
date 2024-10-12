import product1 from "../assets/images/product1.png"
import product2 from "../assets/images/product2.png"
import product3 from "../assets/images/product3.png"
import product4 from "../assets/images/product4.png"
const Newarrivals = () => {


    const config = {
        products: [
            { image: product1, text: "T-shirt with Tape Details", dollar: "$120", discount: "", ratio: "4.5/5",percent:"", star: <><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star-half text-yellow-400" ></i></> },
            { image: product2, text: "Skinny Fit Jeans", dollar: "$240 ", discount: "$260", ratio: "3.5/5",percent:"-20%", star: <><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star-half text-yellow-400" ></i></> },
            { image: product3, text: "checkered Shirt", dollar: "$180", discount: "", ratio: "4.5/5",percent:"", star: <><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star-half text-yellow-400" ></i></> },
            { image: product4, text: "Sleeve Striped T-shirt", dollar: "$130", discount: "$160", ratio: "4.5/5", percent:"-30%",star: <><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star-half text-yellow-400" ></i></> }
        ]
    }
    return (<>
        <section className="flex items-center justify-center">
            <div className="">
                <h1 className="font-extrabold text-3xl text-center ">NEW ARRIVALS</h1>
                <div className=" grid md:grid-cols-4 grid-cols-2 gap-5  mt-10 md:mx-auto mx-5">
                    {
                        config.products.map(function (data) {
                            return (
                                <div>
                                    <img src={data.image} alt="" className="w-[280px] h-[300px] rounded-3xl" />
                                    <h1 className="ml-3 font-semibold mt-3 mb-2 text-xl">{data.text}</h1>
                                    <p className="ml-3">{data.star} <span>{data.ratio}</span></p>
                                    <p className="ml-3 mt-2 font-semibold text-xl">{data.dollar}  <span className="font-light line-through ">{data.discount}</span> <span className="text-[#FF3333] bg-red-200  rounded-md ">{data.percent}</span></p>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className="mt-10 text-center">
                    <button className="border  p-2 w-56 rounded-3xl font-semibold">View All </button>
                </div>
            </div>
        </section>
        <hr className="mb-10 mt-10" />

    </>)
}
export default Newarrivals