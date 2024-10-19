import React from 'react'
import HeroSection from '../components/HeroSection'
import Brand from '../components/Brand'
import NewArrival from '../components/NewArrival'
import Topselling from '../components/Topselling'
import Dresssstyle from '../components/Dressstyle'
import Review from '../components/Reviews'

const Home = () => {
    return (
        <>
        <HeroSection/>
        <Brand/>
        <NewArrival/>
        <Topselling/>
        <Dresssstyle/>
        <Review/>
        </>
    )
}

export default Home