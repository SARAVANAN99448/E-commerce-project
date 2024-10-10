import Discount from "./components/Discount"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import Newarrivals from "./components/Newarrivals"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./components/Signup"

const App = ()=>{
return(<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<><Discount/><Navbar/><Newarrivals/></>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
</Routes>
</BrowserRouter>

</>)
}
export default App