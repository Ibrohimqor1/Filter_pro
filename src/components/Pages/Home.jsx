import React from 'react'
import Swiper from '../swiper/Swiper'
import Section from '../Section/Section'
import Contact from '../Contacts/Contact'
import CategCard from '../CategCard/CategCard'
import Doma from "../Products/Doma/Dome"
const Home = () => {
    return (
        <>
       
         
            {/* <Navbar1/> */}
           <Swiper/>
           <Section/>
           <Contact/>
           <CategCard/>
          
           <Doma/>
        
          
        </>
    )
}

export default Home