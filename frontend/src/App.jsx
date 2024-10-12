import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Onsale from "./pages/Onsale"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Discount from "./components/Discount"
import Navbar from "./components/Navbar"
<<<<<<< HEAD
import Casuals from "./pages/Casuals"
import Formal from "./pages/Formal"
import Party from "./pages/Party"
import Gym from "./pages/Gym"

const App = () => {
    return (
        <div>
            <Discount />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/on-sale" element={<Onsale />} />
                <Route path="/product:productID" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/casual" element={<Casuals />} />
                <Route path="/formal" element={<Formal />} />
                <Route path="/party" element={<Party />} />
                <Route path="/gym" element={<Gym />} />
            </Routes>
        </div>
    )
=======
import Newarrivals from "./components/Newarrivals"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from "./components/Signup"
import Topselling from "./components/Topselling"
import Dresssstyle from "./components/Dressstyle"

const App = ()=>{
return(<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<><Discount/><Navbar/><Newarrivals/><Topselling/></>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
</Routes>
</BrowserRouter>

</>)
>>>>>>> 1b2568b9061b5f3a4f6747d35c2d21de48f9dd09
}
export default App