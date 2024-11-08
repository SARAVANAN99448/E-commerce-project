// import { useState } from "react"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"
// const Register = () => {
//     const [username, setusername] = useState()
//     const [password, setpassword] = useState()
//     const [usererror, setusererror] = useState()
//     const [passerror, setpasserror] = useState()
//     const navigate = useNavigate()
//     const handleemail = (e) => {
//         setusername(e.target.value)

//     }
//     const handlepass = (e) => {
//         setpassword(e.target.value)
//     }
//     const submit = async (e) => {
//         e.preventDefault();
//         // const userregex = /^[a-zA-Z0-9]+@gmail\.com$/
//         // if (!userregex.test(username)) {
//         //     setusererror(true)
//         // }
//         try {
//             const response = await axios.post("http://localhost:4000/register", { username, password })
//             const { token } = response.data;
//             localStorage.setItem("token", token);
//             alert("Registration successfull")
//             navigate("")
//         }
//         catch (error) {
//             console.error("Error registering", error)

//         }

//     }
//     return (<>
//         <section className="mt-10 flex justify-center  ">
//             <div className="border-[3px] p-10  border-black rounded-md   ">
//                 <form className="">
//                     <table className="text-xl font-semibold ">
//                         <tr>
//                             <td><label>E-mail :  </label></td>
//                             <td><input type="email"
//                                 onChange={handleemail}
//                                 className="ml-3 outline-none border-[3px] p-1  rounded-md border-black " /></td>
//                         </tr>
//                         {/* <tr>
//                             <td>{usererror ? alert("email must contains @gmail.com at the end") : ""}</td>
//                         </tr> */}
//                         <br />
//                         <tr>
//                             <td><label>Password :  </label></td> <td><input type="password"
//                                 onChange={handlepass}
//                                 className="ml-3 outline-none border-[3px] p-1 rounded-md border-black " /></td>
//                         </tr>
//                         <br />
//                         <tr className="text-center">
//                             <td></td><td><button onClick={submit} className="w-52 text-white p-1 rounded-md ml-3  bg-[#1B8EF9]">Register</button></td>
//                         </tr>
//                     </table>
//                 </form>
//             </div>
//         </section>
//     </>)

// }
// export default Register