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
import Casuals from "./pages/Casuals"
import Formal from "./pages/Formal"
import Party from "./pages/Party"
import Gym from "./pages/Gym"
import Footer from "./components/Footer"
import SearchBar from "./components/SearchBar"
import Register from "./components/Register"

const App = () => {
    return (
        <div>
            <Discount />
            <Navbar />
            <SearchBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/on-sale" element={<Onsale />} />
                <Route path="/product/:productID" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/place-order" element={<PlaceOrder />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/casual" element={<Casuals />} />
                <Route path="/formal" element={<Formal />} />
                <Route path="/party" element={<Party />} />
                <Route path="/gym" element={<Gym />} />
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}
export default App