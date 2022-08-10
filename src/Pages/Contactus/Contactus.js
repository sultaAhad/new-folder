import React, { useEffect } from "react";
import AOS from "aos";
import innerbanner from "../../Assets/img/innerbanner.png";
import firepic from "../../Assets/img/firepic.png";
import fireman from "../../Assets/img/fireman.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPhone } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Contactus() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1000);
  }, []);
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
            <h2>Contact US</h2>
            <a>Home </a> <span>{">>"}</span>
            <a>Contact us</a>
          </div>
        </div>
      </section>
      {/* End of Inner Banner section  */}

      {/* Contact us Section  */}
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              className="col-md-5"
            >
              <div className="form-head">
                <h2>Drop us a Message</h2>
              </div>
              <div className="form-all">
                <form>
                  <input
                    className="border"
                    type="text"
                    placeholder="First Name"
                  ></input>
                  <input
                    className="border"
                    type="text"
                    placeholder="Last  Name"
                  ></input>
                  <input
                    className="border"
                    type="email"
                    placeholder="Email "
                  ></input>
                  <input
                    className="border"
                    type="text"
                    placeholder="Phone Number"
                  ></input>

                  <input
                    className="textarea"
                    type="textarea"
                    placeholder="Your message"
                  ></input>

                  <button>Submit</button>
                </form>
              </div>
            </div>

            <div data-aos="flip-up" className="col-md-7">
              <div className="simplehomeimg">
                <img src={firepic} className="img-tls img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div data-aos="flip-down" className="row back-pic padding-back">
            <div className="col-md-6">
              <div className="call">
                <h3>24/7 Available.</h3>
                <h2>Call us Immediately</h2>
                <a>
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
        </div>
      </section>
      {/* End of Contact us Section  */}

      <Footer />
    </div>
  );
}

export default Contactus;
