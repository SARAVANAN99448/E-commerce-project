import { CiSearch } from "react-icons/ci";
import { FiShoppingCart} from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
    return (<>
        <section>
            <div className="flex items-center  m-5 justify-center">
                <nav className="flex items-center mr-10 ">
                    <i className="md:hidden mr-3"><GiHamburgerMenu size={20}/></i>
                    <h1 className="text-2xl font-extrabold">SHOP.CO</h1>
                    <ul className="md:flex gap-[24px] pl-7 hidden ">
                        <li>Shop</li>
                        <li>On sale</li>
                        <li>New Arrivals</li>
                        <li>Brands</li>
                    </ul>
                </nav>
                <div className="hidden md:block">
                   <div className="bg-[#F0F0F0]  border  flex items-center rounded-3xl w-[600px] p-3">
                   <i><CiSearch size={20} className="mr-2"/></i>
                   <div className=" ">
                    <input 
                    type="text" 
                    className="outline-none bg-[#F0F0F0]"
                    placeholder="Search for Products..." />
                    
                    </div>
                   </div>
                </div>
                <div className="flex ml-10 gap-[50%]">
                    <i><FiShoppingCart size={20}/></i>
                    <i><CiUser size={20}/></i>
                </div>
            </div>
        </section>
    </>)

}
export default Navbar