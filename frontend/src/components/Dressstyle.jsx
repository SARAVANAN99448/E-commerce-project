import casual from "../assets/images/casual.png"
import formal from "../assets/images/formal.png"
import party from "../assets/images/party.png"
import gym from "../assets/images/gym.png"


const Dresssstyle = () => {
    const images = [{ image: casual }, { image: formal }, { image: party }, { image: gym }]
    return (<>
        <section className="mb-96">
            <div className="bg-[#F0F0F0] m-20">
                <h1 className="text-4xl font-bold text-center">BROWSE BY DERSS STYLE</h1>
                <div className="">
                    <div className="flex ">
                        <div className="w-1/2 h-[289px]">
                            <img src={casual} alt="" />
                        </div>
                        <div className=" h-[289px]">
                        <img src={formal} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)

}
export default Dresssstyle