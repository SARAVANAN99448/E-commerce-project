import top1 from "../assets/images/top1.png"
import top2 from "../assets/images/top2.png"
import top3 from "../assets/images/top3.png"
import top4 from "../assets/images/top4.png"

const Topselling = () => {
    const config = {
        products: [
            { image: top1, text: "Vertical Striped Shirt", dollar: "$212", discount: "$232", ratio: "5.0/5",percent:"-20%", star: <><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i></> },
            { image: top2, text: "Courage Graphic T-shirt", dollar: "$145 ", discount: "", ratio: "4.0/5",percent:"", star: <><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i></> },
            { image: top3, text: "Loose Fit Bermuda Shorts", dollar: "$80", discount: "", ratio: "3.0/5",percent:"", star: <><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i></> },
            { image: top4, text: "Faded Skinny Jeans", dollar: "$210", discount: "", ratio: "4.5/5", percent:"",star: <><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star-half text-yellow-400" ></i></> }
        ]
    }
    return (<>
        <section className="flex items-center justify-center">
            <div className="">
                <h1 className="font-extrabold text-3xl text-center ">TOP SELLING</h1>
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
export default Topselling