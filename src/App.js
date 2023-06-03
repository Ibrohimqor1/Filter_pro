import Home from "./components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import Doma from "./components/Pages/Doma"
import Promish from "./components/Pages/Promish";
import Items from "../src/components/Pages/all"
import Admin from "./components/Pages/Admin";
import Admin_pas from "../src/components/Admin/Admin_pas"
import Inner_side from "../src/components/Inner_Side/Inner_side"
import Korzinka from "../src/components/Korzinka/Korzinka"
import Kortrij from "../src/components/Products/Kortrij/Kortrij"

import Footer from "./components/Footer/Footer";
import Magis from "../src/components/Products/Magis/Magis"
import Zapchas from "../src/components/Products/Zapchas/Zapchas"
import About from "./components/About/about";
import Sign__in from "./components/Sign_In/Sign__in";
import Sign__Up from "./components/Sign_Up/Sign__Up";
import Popular from "../src/components/popular/popular"
import Contact from "../src/components/Contact/Contact"
// import about from "../src/components/About/about"
function App() {
  return (
    
    <>
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dailyFilters' element={<Doma />} />
        <Route path='/kortrij' element={<Kortrij />} />
        <Route path='/promish' element={<Promish />} />
        <Route path='/zapchas' element={<Zapchas />} />
        <Route path='/magis' element={<Magis />} />
        <Route path='/all' element={<Items />} />
        <Route path='/admin1' element={<Admin />} />
        <Route path='/admin' element={<Admin_pas />} />
        <Route path='/card/:_id' element={<Inner_side />} />
        <Route path='/korzinka' element={<Korzinka/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<Sign__in/>}/>
        <Route path='/sign-up' element={<Sign__Up/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
<Footer/>
    </>
  );
}
export default App;
