import product1 from "../assets/images/product1.png"
import product2 from "../assets/images/product2.png"
import product3 from "../assets/images/product3.png"
import product4 from "../assets/images/product4.png"
const Newarrivals = () => {

    const config = {
        products :[
            {image:product1},{image:product2},{image:product3},{image:product4}
        ]
    }
    return (<>
        <section>
            <div className="text-center">
                <h1 className="font-extrabold text-3xl">NEW ARRIVALS</h1>
                <div className="flex flex-wrap gap-5 justify-center mt-10">
                {
                    config.products.map(function(data){
                        return(
                            <img src={data.image} alt=""  className="w-[300px] h-[300px] rounded-lg"/>
                        )
                    })
                }
                </div>
            </div>
        </section>

    </>)
}
export default Newarrivals