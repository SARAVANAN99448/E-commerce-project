import { useEffect, useState } from "react"
import axios from "axios"

const producted = () => {
    const [message, setmaessage] = useState("");

    useEffect(() => {
        const fetchdata = async()=>{
            const token = localStorage.getItem("token");

            if(!token){
                alert("you need login first")
                return;
            }
            try{
                const response = await axios.get("http://localhost:4000/producted",{
                    headers:{Authorization:`Bearer ${token}`}
                })
                setmaessage(response.data);
            }
            catch(error){
                console.error("Error ",error)
            }
        }
        fetchdata();

    },[]);
    return <div>{message}</div>

}
export default producted