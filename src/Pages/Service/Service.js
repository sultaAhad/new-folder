import React, { useEffect } from 'react'
import AOS from 'aos';
import Header from '../../Components/Header'
import innerbanner from "../../Assets/img/innerbanner.png";
import service1 from "../../Assets/img/service1.png";
import service2 from "../../Assets/img/service2.png";
import service3 from "../../Assets/img/service3.png";
import service4 from "../../Assets/img/service4.png";
import service5 from "../../Assets/img/service5.png";
import service6 from "../../Assets/img/service6.png";
import service7 from "../../Assets/img/service7.png";
import service8 from "../../Assets/img/service8.png";
import service9 from "../../Assets/img/service9.png";
import service10 from "../../Assets/img/service10.png";
import service11 from "../../Assets/img/service11.png";
import Testimonial from '../../Components/Testimonial';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';


function Service() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1000);
  }, [])
  return (
    <div>
        <Header />
         {/* Inner Banner Section  */}
      <section className="Inner-ban">
        <div className="innerimg">
          <img src={innerbanner} className="img-tls img-fluid" alt="" />
        </div>
        <div className="innertextflex">
          <div className="immer-text">
            <h2>Our Services</h2>
            <a >Home </a> <span>{">>"}</span>
            <a>Services</a>
          </div>
        </div>
      </section>
      {/* End of Inner Banner section  */}

         {/* We Serve Section  */}
         <section className="we-serve-sec">
        <div className="we-serve-head">
          <h3>Our Services</h3>
          <h2>We Serve The Best Service</h2>
          <p>
            We have served fire brigades around the world since 1995. We are a
            world fire and rescue service - one of the greatest <br />{" "}
            firefighting and salvation organizations in the world.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
               <img src={service1} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
                <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
                <img src={service2} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
              <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
                <img src={service3} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
              <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
                <img src={service4} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
              <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
                <img src={service5} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
              <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
                <img src={service6} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
              <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
                <img src={service7} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
              <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
                <img src={service8} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
              <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
                <img src={service9} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
              <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
                <img src={service10} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
              <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>
             
             
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-3">
              <div className="we-serve-img">
                <img src={service11} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
              <h4>
                Your Service Name <br /> 
                   here
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>
            {/* <div className="we-serve-btn">
              <a >View More</a>
            </div> */}
          </div>

          <Testimonial />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Service