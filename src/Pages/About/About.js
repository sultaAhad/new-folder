import React, { useEffect } from "react";
import AOS from 'aos';
import innerbanner from "../../Assets/img/innerbanner.png";
import whopic from "../../Assets/img/whopic.png";
import single1 from "../../Assets/img/single1.png";
import single2 from "../../Assets/img/single2.png";
import single3 from "../../Assets/img/single3.png";
import single4 from "../../Assets/img/single4.png";
import single5 from "../../Assets/img/single5.png";
import single6 from "../../Assets/img/single6.png";
import maini1 from "../../Assets/img/maini1.png";
import maini2 from "../../Assets/img/maini2.png";
import maini3 from "../../Assets/img/maini3.png";
import maini4 from "../../Assets/img/maini4.png";
import maini5 from "../../Assets/img/maini5.png";
import maini6 from "../../Assets/img/maini6.png";
import fan from "../../Assets/img/fan.png";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import {Link} from 'react-router-dom'


function About() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1000);
  }, [])
  return (
   
    <>
      <Header />
      {/* Inner Banner Section  */}
      <section  className="Inner-ban">
        <div className="innerimg">
          <img src={innerbanner} className="img-tls img-fluid" alt="" />
        </div>
        <div className="innertextflex">
          <div className="immer-text">
            <h2>About Us</h2>
            <a >Home </a> <span>{'>>'}</span>
            <a>About us</a>
          </div>
        </div>
      </section>
      {/* End of Inner Banner section  */}

      {/* Whoe we are section  */}
      <section data-aos="fade-up"
     data-aos-duration="1000" className="whoweare-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="whoweare-text">
                <h2>Who We Are</h2>
                <p>
                  FIRE Tech Fire Fighting is A+ certified and approved by Civil
                  Defense and Free Zone Authorities to install, maintain, and
                  testify all kinds of Fire Protection Systems in Dubai,
                  Sharjah, and Jabel Ali Free Zone.
                </p>
                <p>
                  We are an ISO certified company providing comprehensive and in
                  depth services in the design, supply, installation, testing,
                  commissioning, and maintenance of a whole range of fire
                  systems. Our products and services range from Fire Alarm and
                  Detection Systems, Fire Pumps, Fire Sprinklers, Emergency
                  Evacuation Systems, FM200 Systems, Deluge Systems, and Fire
                  Protective Coatings
                </p>

                <p className="forback">
                  Customer references, recommendations, accreditations, and
                  recognitions are some of the vital factors that drive our
                  business growth.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="whowesec-img">
                <img src={whopic} className="img-tls img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Who we are section  */}

      {/* why choose us section  */}
      <section  className="whychooseus-sec ">
        <div className="container">
          <div className="whychoosehead">
            <h2>Why Choose Us</h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div data-aos="fade-down-right" className="boxes">
                <div className="box1">
                  <img src={maini1} className="img-tls img-fluid" alt="" />
                  <h2>Authorized &Approved</h2>
                  <p>
                    We are legally authorized and approved by respective Civil
                    Authorities to provide innovative services in the Fire
                    Systems.
                  </p>
                </div>
                <div className="box-img">
                  <img src={single1} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div data-aos="flip-left" className="boxes">
                <div className="box1">
                  <img src={maini2} className="img-tls img-fluid" alt="" />
                  <h2>Experienced & Committed</h2>
                  <p>
                    Our experienced and skilled team is set to deliver 100%
                    accountability, transparency, and customer satisfaction on
                    the services.
                  </p>
                </div>
                <div className="box-img">
                  <img src={single2} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div data-aos="flip-right" className="boxes">
                <div className="box1">
                  <img src={maini3} className="img-tls img-fluid" alt="" />
                  <h2>Impeccable History & Records</h2>
                  <p>
                    We thrive on our organizational competency and exposure to
                    2500 plus successful project executions in Dubai and other
                    Emirates.
                  </p>
                </div>
                <div className="box-img">
                  <img src={single3} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div data-aos="flip-up" className="boxes">
                <div className="box1">
                  <img src={maini4} className="img-tls img-fluid" alt="" />
                  <h2>Emergency Response Team</h2>
                  <p>
                    We maintain a 24 X 7 ready-to-serve response and support
                    team to serve our customers in any unforeseen emergencies
                    and situations.
                  </p>
                </div>
                <div className="box-img">
                  <img src={single4} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-3"></div>

            <div className="col-md-3">
              <div data-aos="flip-down" className="boxes">
                <div className="box1">
                  <img src={maini5} className="img-tls img-fluid" alt="" />
                  <h2>Prioritizing Safety & Quality</h2>
                  <p>
                    We follow strict ISO policies and standards in our
                    end-to-end operations as we value the safety and
                    satisfaction of our customers.
                  </p>
                </div>
                <div className="box-img">
                  <img src={single5} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="boxes">
                <div className="box1">
                  <img src={maini6} className="img-tls img-fluid" alt="" />
                  <h2>Corporate Social Responsibility</h2>
                  <p>
                    We ensure our regular contribution to fixing the
                    environmental, social, educational, health, literacy, and
                    gender-based issues around us.
                  </p>
                </div>
                <div className="box-img">
                  <img src={single6} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of choose us section  */}

      {/* Our Mission section  */}
      <section className="Our-Mission-sec">
        <div className="container-fluid">
          <div className="row">
            <div data-aos="fade-down-right" className="col-md-6">
              <div className="mission-img">
                <img src={fan} className="img-tls img-fluid" alt="" />
                <div className="mission-text">
                  <h3>We Provide The Best Protection</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna .
                  </p>
                  <Link to="/Servicedetail" >Read more</Link>
                </div>
              </div>
            </div>

            <div data-aos="fade-down-left" className="col-md-6 for-back-color">
              <div className="mission-stuff">
                <h3>Our Mission</h3>
                <p>
                  We are committed to provide responsible, cost-effective, and
                  innovative solutions and products in the Fire Protection
                  Systems that will safeguard the life and assets of people. We
                  envision ourselves to be a market-leading fire protection
                  company in dubai that cater quality services and customer
                  satisfaction.
                </p>

                <p>
                  As the best fire and safety company in Dubai, We deliver
                  incomparable maintenance services to any size of fire Safety
                  system installed in your facility in conformance with the ISO
                  standards, international practices, and Dubai Civil Defense
                  Regulations.
                </p>
              </div>

              <div className="mission-list">
                <ul>
                  <li>Multistory Buildings & Towers</li>
                  <li>Commercial Buildings</li>
                  <li>Shopping Complexes</li>
                  <li>Hospitality & Educational Institutions</li>
                  <li>Retail Outlets</li>
                  <li>Hotels & Hospitals</li>
                  <li>Factories & Warehouses</li>


                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of Mission section  */}
      <Footer />
    </>
  );
}

export default About;
