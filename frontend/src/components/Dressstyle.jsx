import { Link } from "react-router-dom"
import { assets } from "../assets/images/assets"
import Title from "./Title"

const Dresssstyle = () => {
    return (<>
        <section className="" id='Brand'>
            <div className="bg-[#F0F0F0] md:m-20 m-4 md:p-0 p-5 rounded-3xl ">
                <div className="text-center text-3xl py-8 px-4">
                    <Title text1={"BROWSE BY DRESS STYLE"} />
                </div>
                <div className="">
                    <div className="flex justify-center gap-5  flex-wrap">
                        <Link to='/casual'>
                            <div className="relative hover:scale-110 transition ease-in-out">
                                <h1 className="font-semibold text-3xl absolute md:left-10 left-5 top-5">Casual</h1>
                                <img src={assets.casual} alt="" className="w-[310px] h-[180px] md:w-[407px] md:h-[289px] rounded-xl " />
                            </div>
                        </Link>
                        <Link to='/formal'>
                            <div className="relative hover:scale-110 transition ease-in-out">
                                <h1 className="font-semibold text-3xl absolute md:left-10 left-5 top-5">Formal</h1>
                                <img src={assets.formal} alt="" className="w-[310px] h-[180px] md:w-[684px] md:h-[289px] rounded-xl" />
                            </div>
                        </Link>
                        <Link to='/party'>
                            <div className="relative hover:scale-110 transition ease-in-out">
                                <h1 className="font-semibold text-3xl absolute md:left-10 left-5 top-5">Party</h1>
                                <img src={assets.party} alt="" className="w-[310px] h-[180px] md:w-[684px] md:h-[289px] rounded-xl" />
                            </div>
                        </Link>
                        <Link to='/gym'>
                            <div className="relative hover:scale-110 transition ease-in-out">
                                <h1 className="font-semibold text-3xl absolute md:left-10 left-5 top-5">Gym</h1>
                                <img src={assets.gym} alt="" className="w-[310px] h-[180px] md:w-[407px] md:h-[289px] rounded-xl mb-4 md:mb-8" />
                            </div>
                        </Link>
                    </div>


                </div>
            </div>
        </section>
    </>)

}
export default Dresssstyle