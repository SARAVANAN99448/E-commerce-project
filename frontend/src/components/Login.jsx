import { useState } from "react"
import { Link } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import auth from "./Config"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()
    const handleemail = (e) => {
        setemail(e.target.value)
    }
    const handlepassword = (e) => {
        setpassword(e.target.value)
    }
    const submit = () => {
        signInWithEmailAndPassword(auth, email, password).
            then(() => { navigate("/") }).
            catch(() => { console.log("Failed to login") })

    }
    return (<>
        <section>
            <div className="flex justify-center items-center mt-32">
                <div className="bg-black rounded-md text-center w-96 h-96 flex flex-col items-center justify-center">
                    <h1 className="text-white font-extrabold text-3xl mb-5 ">Login</h1>
                    <input
                        onChange={handleemail}
                        value={email}
                        className="outline-none p-2 rounded-md"
                        type="text"
                        placeholder="E-mail" /><br />
                    <input
                        onChange={handlepassword}
                        value={password}
                        className="outline-none p-2 rounded-md"
                        type="password"
                        placeholder="Password" /><br />
                    <input
                        onClick={submit}
                        className="outline-none p-2 rounded-md"
                        type="number"
                        placeholder="Moblie No" /><br />
                    <p className="text-white mb-3">Already haven't an account ? <Link to={"/Signup"} className="underline">Signup</Link></p>
                    <button className="bg-white p-2 rounded-md font-semibold">Submit</button>
                </div>
            </div>
        </section>
    </>)
}
export default Login