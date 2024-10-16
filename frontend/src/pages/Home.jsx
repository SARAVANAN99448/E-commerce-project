import React from 'react'
import HeroSection from '../components/HeroSection'
import Brand from '../components/Brand'
import NewArrival from '../components/NewArrival'
import Topselling from '../components/Topselling'
import Dresssstyle from '../components/Dressstyle'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
        <HeroSection/>
        <Brand/>
        <NewArrival/>
        <Topselling/>
        <Dresssstyle/>
        <Footer/>
        </>
    )
}

export default Home