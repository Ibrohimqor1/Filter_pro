import React from 'react'
import Navbar from '../Navbar/Navbar'
import Top_Nav from '../Top_Navbar/Top_Nav'
import Swiper from '../swiper/Swiper'
import Footer from '../Footer/Footer'
import Section from '../Section/Section'
import Contact from '../Contacts/Contact'
import CategCard from '../CategCard/CategCard'

import Doma from "../Products/Doma/Dome"
const Home = () => {
    return (
        <>
        <Top_Nav/>
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