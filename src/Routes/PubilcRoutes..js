import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import About from '../Pages/About/About';
import Career from '../Pages/Career/Career';
import Certificate from '../Pages/Certificate/Certificate';
import Contactus from '../Pages/Contactus/Contactus';
 import Firepump from '../Pages/Firepump/Firepump';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Project/Projects';
import Projectdetail from '../Pages/Projectdetail/Projectdetail';
import Service from '../Pages/Service/Service';
import Servicedetail from '../Pages/Servicedetail/Servicedetail';

function PubilcRoutes() {
  return (
    <>
     <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
         <Route path="/About" element={<About/>} />
         <Route path="/Service" element={<Service/>} />
         <Route path="/Projects" element={<Projects/>} />
         <Route path="/Career" element={<Career/>} />
         <Route path="/Contactus" element={<Contactus/>} />
         <Route path="/Certificate" element={<Certificate/>} />
         <Route path="/Firepump" element={<Firepump/>} />
         <Route path="/Servicedetail" element={<Servicedetail/>} />
         <Route path="/Projectdetail" element={<Projectdetail/>} />
         
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default PubilcRoutes;