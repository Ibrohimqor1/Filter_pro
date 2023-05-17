import Home from "./components/Pages/Home";
import { Routes, Route } from "react-router-dom";
import Doma from "./components/Pages/Doma"
import Promish from "./components/Pages/Promish";
import Items from "../src/components/Pages/all"
import Admin from "./components/Pages/Admin";
import Admin_pas from "../src/components/Admin/Admin_pas"
import Inner_side from "../src/components/Inner_Side/Inner_side"
function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/doma' element={<Doma/>}/>
    <Route path='/promish' element={<Promish/>}/>
    <Route path='/all' element={<Items/>}/>
    <Route path='/admin1' element={<Admin/>}/>
    <Route path='/admin' element={<Admin_pas/>}/>
    <Route path='/card/:_id' element={<Inner_side/>}/>
    </Routes>
     
    </>
  );
}
export default App;
