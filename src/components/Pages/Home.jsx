import React from 'react'
import Navbar from '../Navbar/Navbar'
import TopNav from '../topNav/topNav'
import Swiper from '../swiper/Swiper'
import Footer from '../Footer/Footer'
import Section from '../Section/Section'
import Contact from '../Contacts/Contact'
import CategCard from '../CategCard/CategCard'

import Doma from "../Products/Doma/Dome"
const Home = () => {
    return (
        <>
        <TopNav/>
            <Navbar />
           <Swiper/>
           <Section/>
           <Contact/>
           <CategCard/>
          
           <Doma/>
           <Footer/>
          
        </>
    )
}

export default Home