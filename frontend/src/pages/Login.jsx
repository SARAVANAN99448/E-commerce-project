import { useState } from "react"
import { Link } from "react-router-dom"
import auth from "../components/Config"
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import { useNavigate } from "react-router-dom"
const Signup = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [confrim, setconfirm] = useState()
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const handleemail = (e) => {
        setemail(e.target.value)
    }
    const handlepassword = (e) => {
        setpassword(e.target.value)
    }
    const handleconfirm = (e) => {
        setconfirm(e.target.value)
    }
    const submit=(e)=>{
        e.preventDefault();
        signInWithPopup(auth,provider).
        then(()=>{navigate("/")})


    }
    return (<>
        <section className="bg-black">
            <div className="flex justify-center items-center ">
                <div className="text-center w-full h-full  flex flex-col items-center justify-center">
                    <h1 className="text-white font-extrabold text-3xl mb-5 ">Signup</h1>
                    <input
                        onChange={handleemail}
                        value={email}
                        className="outline-none p-2 rounded-md w-96"
                        type="text"
                        required
                        placeholder="E-mail" /><br />
                    <input
                        onChange={handlepassword}
                        value={password}
                        className="outline-none p-2 rounded-md"
                        type="password"
                        placeholder="Password" /><br />
                    <input
                        onChange={handleconfirm}
                        value={confrim}
                        className="outline-none p-2 rounded-md"
                        type="password"
                        placeholder="Confirm Password" /><br />
                    <button 
                    onClick={submit}
                    className="bg-white p-2 rounded-md font-semibold">Submit</button>
                </div>
            </div>
        </section>

    </>)
}
export default Signup

