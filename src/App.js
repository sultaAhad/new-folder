import './App.css';
import $ from 'jquery';
import AOS from 'aos';
import './Assets/css/style.css'
import './Assets/css/About.css'
import './Assets/css/Service.css'
import './Assets/css/Projects.css'
import './Assets/css/Career.css'
import './Assets/css/Firepump.css'
import './Assets/css/Contact.css'
import './Assets/css/Certificate.css'
import './Assets/css/Servicedetail.css'
import './Assets/css/Projectdetail.css'
import Header from './Components/Header';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './Pages/About/About';
import PubilcRoutes from './Routes/PubilcRoutes.';
import { useEffect } from 'react';





function App() {
    // Mobile Nav
    $("document").ready(function () {
      $(".canvas-icon i").click(function () {
        $(".mobile-header").addClass("show");
      });
  
      $(".mobile-header .cancel").click(function () {
        $(".mobile-header").removeClass("show");
      });
    });
    // Mobile Nav
    useEffect(() => {
      setTimeout(() => {
        AOS.init();
      }, 1000);
    }, [])
  return (
    <>





      {/* <Home /> */}
      <PubilcRoutes />




    </>
  );
}

export default App;
