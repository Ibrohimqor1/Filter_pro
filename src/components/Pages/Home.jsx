import React from 'react'
import Navbar from '../Navbar/Navbar'
import Top_Nav from '../Top_Navbar/Top_Nav'
import Swiper from '../swiper/Swiper'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <>
        <Top_Nav/>
            <Navbar />
           <Swiper/>
           <Footer/>
        </>
    )
}

export default Home