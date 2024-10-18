import { assets } from "../assets/images/assets"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"
const Review = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Tablet and smaller screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        

    };
    const saro = <><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i><i className="mr-1 fa-solid fa-star text-yellow-400" ></i></>
    const data = [
        { star: saro, name: "Sarah M. ", check: `${assets.greentick}`, msg: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." },
        { star: saro, name: "Alex k. ", check: `${assets.greentick}`, msg: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.” " },
        { star: saro, name: "James L. ", check: `${assets.greentick}`, msg: "As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”" },
        { star: saro, name: "Sarah M. ", check: `${assets.greentick}`, msg: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." },
        { star: saro, name: "Luffy D. ", check: `${assets.greentick}`, msg: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." },
        { star: saro, name: "Ace G. ", check: `${assets.greentick}`, msg: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations." }


    ]
    return (<>
        <section>
            <div>
                <h1 className="text-4xl font-bold md:text-start md:ml-20  text-center ">OUR HAPPY CUSTOMERS</h1>

                <div className=" m-10 ">
                    <Slider {...settings}>
                        {
                            data.map(function (data) {
                                return (<>
                                <div className=" border  p-5 md:ml-10 rounded-xl">
                                    <div className=" ">
                                        <h1 className="mb-2">{data.star}</h1>
                                        <div className="flex gap-2 ">
                                        <h1 className="font-semibold text-xl mb-2  ">{data.name} </h1>
                                        <img className="size-6" src={data.check} alt="" />
                                        </div>
                                        <p>{data.msg}</p>
                                    </div>
                                    </div>

                                </>)
                            })
                        }
                    </Slider>

                </div>
            </div>
            <div>
                <div>

                </div>
            </div>
        </section>
    </>)

}
export default Review