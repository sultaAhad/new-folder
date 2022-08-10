import React from "react";
import innerbanner from "../../Assets/img/innerbanner.png";
import Sdetail from "../../Assets/img/sdetail.png";
import icon from "../../Assets/img/icon.png";
import fireman from "../../Assets/img/fireman.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPhone } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header";
import Testimonial from "../../Components/Testimonial";
import Footer from "../../Components/Footer";
import { Link } from "@material-ui/core";
function Servicedetail() {
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
            <h2>Our Services Detail</h2>
            <a>Home </a> <span>{">>"}</span>
            <a>Services</a> <span>{">>"}</span>
            <a>Service detail</a>
          </div>
        </div>
      </section>
      {/* End of Inner Banner section  */}

      {/* Service section  */}
      <section className="service-sec service-detail-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="properties-text for-captalize">
                <h3>Our Service Detail</h3>
                <h2>Annual Maintenance Contract</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Proin aliquet maurisa volutpat lobortis erat libero
                  condimentum metus, eu tincidunt felis ligula in turpis. Cras
                  sit amet tristique libero. Praesent neque ante pretium
                  sollicitudin eu tincidunt felis ligula in turpis.
                </p>
                <div className="fire-flex">
                  <img src={icon} className="img-tls img-fluid" alt="" />
                  <h5>
                    Firefighters are essential foot warriors here at home.
                  </h5>
                </div>

                <div className="fire-flex">
                  <img src={icon} className="img-tls img-fluid" alt="" />
                  <h5>
                    Firefighters are essential foot warriors here at home.
                  </h5>
                </div>

                <div className="fire-btn">
                  <Link to="/Contactus">Get in touch</Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 for-right">
              <div className="fire-img">
                <img src={Sdetail} className="img-tls img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div className="row back-pic">
            <div className="col-md-6">
              <div className="call">
                <h3>24/7 Available.</h3>
                <h2>Call us Immediately</h2>
                <a >
                  <FontAwesomeIcon className="forcolor" icon={faPhone} /> 666
                  888 0000
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <div className="callimg">
                <img src={fireman} className="img-tls img-fluid" alt="" />
              </div>
            </div>
          </div>
          <Testimonial />
        </div>
      </section>

      {/* End of Service Section  */}
      <Footer />
     
    </div>
  );
}

export default Servicedetail;
