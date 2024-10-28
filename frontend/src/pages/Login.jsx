import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    const navigate = useNavigate()
    const handleemail = (e) => {
        setusername(e.target.value)

    }
    const handlepass = (e) => {
        setpassword(e.target.value)
    }
    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", { username, password })
            const { token } = response.data;
            localStorage.setItem("token", token);
            alert("Login Successfull")
            navigate("/")
        }
        catch (error) {
            console.error("Error logging", error)
            alert("Login failed")

        }
    }
    return (<>
        <section className="mt-10 flex justify-center  ">
            <div className="border-[3px] p-10  border-black rounded-md   ">
                <form className="">
                    <table className="text-xl font-semibold ">
                        <tr>
                            <td><label>E-mail :  </label></td>
                            <td><input type="email"
                                onChange={handleemail}
                                className="ml-3 outline-none border-[3px] p-1  rounded-md border-black " /></td>
                        </tr><br />
                        <tr>
                            <td><label>Password :  </label></td> <td><input type="password"
                                onChange={handlepass}
                                className="ml-3 outline-none border-[3px] p-1 rounded-md border-black " /></td>
                        </tr><br />
                        <tr className="text-center">
                            <td></td><td><button onClick={submit} className="w-52 text-white p-1 rounded-md ml-3  bg-[#1B8EF9]">Login</button></td>
                        </tr>
                    </table>
                </form>
            </div>
        </section>
    </>)

}
export default Login