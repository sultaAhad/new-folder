import React, { useEffect } from "react";
import AOS from "aos";

import mainbanner from "../../Assets/img/mainbanner.png";
import pic1 from "../../Assets/img/pic1.png";
import pic2 from "../../Assets/img/pic2.png";
import pic3 from "../../Assets/img/pic3.png";
import fire from "../../Assets/img/fire.png";
import colimg from "../../Assets/img/colimg.png";
import check from "../../Assets/img/check.png";
import a01 from "../../Assets/img/a01.png";
import a02 from "../../Assets/img/a02.png";
import a03 from "../../Assets/img/a03.png";
import a04 from "../../Assets/img/a04.png";
import manpic from "../../Assets/img/manpic.png";
import fire1 from "../../Assets/img/fire1.png";
import Range from "../../Components/Range";
import fireicon from "../../Assets/img/fireicon.png";
import i from "../../Assets/img/i.png";
import icon from "../../Assets/img/icon.png";
import fireman from "../../Assets/img/fireman.png";
import stopfire from "../../Assets/img/stopfire.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPhone } from "@fortawesome/free-solid-svg-icons";
import Testimonial from "../../Components/Testimonial";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

// import 'https://unpkg.com/aos@2.3.1/dist/aos.css';

function Home() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 1000);
  }, []);

  return (
    <div>
      <Header />
      {/* Banner Section  */}
      <section className="Banner-sec">
        <img src={mainbanner} className="img-tls img-fluid" alt="" />
        <div className="container">
          <div className="banner-text">
            <div data-aos="fade-left" className="banner-stuff">
              <h2>
                EXPERIENCE THE DIFFERENCE WITH <br /> FIRETECH FIRE FIGHTING LLC
              </h2>
              <p>
                FTF is committed to providing state-of-the-art fire protection
                solutions. Fromoffering quality <br /> firefighting equipment to
                protecting the facility by propermaintenance and <br />{" "}
                installation of fire safety equipment’s conducted <br /> by
                thestandards of NFPA, Dubai & Sharjah Civil Defense
              </p>

              <div className="bannerbtn">
                <div className="div-banner-submit">
                  <Link to="/Contactus">Get in touch</Link>
                  <Link to="/About"> About us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Banner Section  */}

      {/* Small Section  */}
      <section className="Small-sec">
        <div className="container">
          <div AOS="fade-down" className="row">
            <div className="col-md-4">
              <div className="Small-All">
                <div className="Small-img">
                  <img src={pic1} className="img-tls img-fluid" alt="" />
                </div>

                <div className="Small-text">
                  <h3>High-End Products</h3>
                  <p>
                    We are dedicated to supply, install, and maintain
                    firefighting equipment.Being a Civil Defense approved
                    firefighting company we offer wide range offire protection
                    equipment’s meeting Civil defense and NFPA standards
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up" className="col-md-4">
              <div className="Small-All">
                <div className="Small-img">
                  <img src={pic2} className="img-tls img-fluid" alt="" />
                </div>

                <div className="Small-text">
                  <h3>Great Response</h3>
                  <p>
                    There is no compromise on safety and protection. We respond
                    rapidly to yourneeds and concerns. Our seamless support is
                    just a way of advocating for asafe and quality lifestyle
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="Small-All">
                <div className="Small-img">
                  <img src={pic3} className="img-tls img-fluid" alt="" />
                </div>

                <div className="Small-text">
                  <h3>Value-driven</h3>
                  <p>
                    At FTF, integrity, innovation, excellence, commitment, and
                    teamwork are notwords for us; instead, it’s a value system
                    that drives us to deliver the bestcare for the environment
                    and people
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Small section  */}

      {/* Properties Section  */}
      <section data-aos="fade-up" className="Properties-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="properties-img1">
                <img src={colimg} className="img-tls img-fluid" alt="" />
              </div>
              <div className="properties">
                <div className="properties-text">
                  <h3>That’s How We Work</h3>
                  <h2>
                    PAGE Creative Ideas and Innovative <span>Approach</span>{" "}
                  </h2>
                  <p>
                    When fire spreads, it does not look for rich or poor, big or
                    small, famous orunknown, artist or a banker, human or an
                    animal; it engulfs all. Therefore,our fire protection
                    company aspires to protect everyone from life-threatening
                    events and avert all possible mishaps. To deliver the best
                    safetytools and ensure protection, we provide and install
                    fire safety equipment atyour place. Our years of experience
                    in the Firetech industry have made ourvision strong and
                    enables us to deliver high-quality safety equipment tovalue
                    every life
                  </p>

                  <div className="properties-icon">
                    <img src={check} className="img-tls img-fluid" alt="" />
                    <h5>Dedicated to Save Lives</h5>
                  </div>
                  <h4 className="rangehead">Family Saved</h4>
                  <Range />
                  <h4 className="rangehead">Property Saved</h4>
                  <Range />
                </div>
              </div>
            </div>

            <div className="col-md-6 fire1-back-img">
              <div className="properties-img">
                {/* <img src={fire1} className="img-tls img-fluid" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of Properties  */}

      {/* Counter Section  */}
      <section data-aos="fade-right" className="counter-sec">
        <div className="container">
          <div className="count-head">
            <h2>How Much We Have Grown</h2>
          </div>
          <div className="row">
            <div className="counter">
              <div className="count1">
                <h2>18+</h2>
                <h3>Years of Experience</h3>
              </div>

              <div className="count1">
                <h2>200+</h2>
                <h3>Employees</h3>
              </div>

              <div className="count1">
                <h2>1000+</h2>
                <h3>Contracts</h3>
              </div>

              {/* <div className="count1">
                <h2>125+</h2>
                <h3>Projects Completed</h3>
              </div> */}

              {/* <div className="count1">
                <h2>3000+</h2>
                <h3>Satisfied Customers</h3>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* End of Counter Section  */}

      {/* Service section  */}
      <section data-aos="fade-down" className="service-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="properties-text for-captalize">
                {/* <h3>About Our Firbrigs</h3> */}
                <h2>
                  Why Choose FireTech Fire Fighting <br />
                  LLC?
                </h2>
                <p>
                  Fire Tech Firefighting are the pioneers in safety and fire
                  protection solutionssupply and fire fighting systems
                  installation in UAE. Our leading fireextinguishing devices,
                  systems and tools are state-of-the-art and preciselydesigned
                  to combat any fire hazards. Being a Civil Defence Approved
                  FireFighting Company, we have an experienced team of
                  mechanical engineers,and electrical engineers, who ensure that
                  your demands are met every time.When you consult us, whether
                  for supply, installation or maintenance of yourprotective
                  equipment for your personal or professional workplace setting,
                  weensure complete satisfaction throughout the process.
                </p>

                <div className="for-flex">
                  <div className="think">
                    <img src={fireicon} className="img-tls img-fluid" alt="" />
                    <h4>
                      Pre-fire Preventive <br />
                      Measures
                    </h4>
                  </div>

                  <div className="think">
                    <img src={i} className="img-tls img-fluid" alt="" />
                    <h4>
                      24/7 customer <br />
                      support
                    </h4>
                  </div>
                </div>

                <div className="fire-flex">
                  <img src={icon} className="img-tls img-fluid" alt="" />
                  <h5>
                    Quick and adequate fire fighting systems installation.
                  </h5>
                </div>

                <div className="fire-flex">
                  <img src={icon} className="img-tls img-fluid" alt="" />
                  <h5>Regular maintenance for maximum protection.</h5>
                </div>

                <div className="fire-flex">
                  <img src={icon} className="img-tls img-fluid" alt="" />
                  <h5>Cost-effective products for easy accessibility.</h5>
                </div>

                <div className="fire-btn">
                  <Link to="/About">EXPLORE</Link>
                </div>

                <div className="emergencynumber">
                  <div className="emer-icon">
                    <FontAwesomeIcon className="forcolor" icon={faPhone} />

                    <div className="emer-text">
                      <h5>Emergency Number</h5>
                      <a href="tel:+923456789">+923456789 </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 for-right">
              <div className="fire-img">
                <img src={stopfire} className="img-tls img-fluid" alt="" />
                <div className="fireplaybtn">
                  <FontAwesomeIcon className="forcolor" icon={faPlay} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of Service Section  */}

      {/* We Serve Section  */}
      <section data-aos="fade-right" className="we-serve-sec">
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
            <div data-aos="flip-left" className="col-md-3">
              <div className="we-serve-img">
                <img src={a01} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
                <h4>
                  Annual Maintenance Contract <br />
                  read more
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left" className="col-md-3">
              <div className="we-serve-img">
                <img src={a02} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
                <h4>
                  Rectification & Repair <br />
                  rectification
                </h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left" className="col-md-3">
              <div className="we-serve-img">
                <img src={a03} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
                <h4>Fit Out Works</h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div data-aos="flip-left" className="col-md-3">
              <div className="we-serve-img">
                <img src={a04} className="img-tls img-fluid" alt="" />
              </div>
              <div className="we-serve-text">
                <h4>Fire Fighter</h4>
                <Link to="/Servicedetail">View Details</Link>
              </div>
            </div>

            <div className="we-serve-btn">
              <a>View More</a>
            </div>
          </div>

          <div data-aos="flip-left" className="row back-pic">
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
                sadasdasdasdasdadsadsasdasdasdasdasdsafdsfsfdkjshkjfhkjdshgkjhkjhfkjhkjhajds
              </div>
            </div>
          </div>

          <Testimonial />
        </div>
      </section>
      <Footer />
      {/* End of Serve Section  */}
    </div>
  );
}

export default Home;
