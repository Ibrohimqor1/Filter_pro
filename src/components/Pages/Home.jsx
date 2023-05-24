import React from 'react'
import Swiper from '../swiper/Swiper'
import Section from '../Section/Section'
import Contact from '../Contacts/Contact'
import CategCard from '../CategCard/CategCard'
import Doma from "../Products/Doma/Dome"
import Mobile from "../Pages/mobile"
import Top_Nav from "../topNav/topNav";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <>
       
       <Top_Nav/>
<Navbar/>
            {/* <Navbar1/> */}
           <Swiper/>
           <Section/>
           <Contact/>
           <CategCard/>
          
           <Doma/>
        <Mobile/>
          
        </>
    )
}

export default Home