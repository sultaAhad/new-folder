import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from 'aos';
import innerbanner from "../../Assets/img/innerbanner.png";
import protect1 from "../../Assets/img/protect1.png";
import protect2 from "../../Assets/img/protect2.png";
import protect3 from "../../Assets/img/protect3.png";
import protect4 from "../../Assets/img/protect4.png";
import protect5 from "../../Assets/img/protect5.png";
import protect6 from "../../Assets/img/protect6.png";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
function Projects() {
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
        <div data-aos="fade-right" className="innertextflex">
          <div  className="immer-text">
            <h2>Our Projects</h2>
            <a>Home </a> <span>{'>>'}</span>
            <a>Our Projects</a>
          </div>
        </div>
      </section>
      {/* End of Inner Banner section  */}

      {/* Projects Section  */}
      <section className="Project-sec">
        <div className="container">
          <div className="Project-head">
            <h3>Our Projects</h3>
            <h2>Protected By Fire 7</h2>
          </div>
          <div className="row">
            <div data-aos="zoom-in-up" className="col-md-6">
            <Link to="/Projectdetail">
              <div className="project-img">
                <img src={protect1} className="img-tls img-fluid" alt="" />
              </div>
             <div className="for-hover">
             
                <img src={protect1} className="img-tls img-fluid" alt="" />
                <h3>
                  Project Name : <span>Loreum</span>
                </h3>
                <h3>
                  Location : <span>Loreum </span>{" "}
                </h3>
                <h3>
                  Client Name: <span>Loreum ispusum </span>
                </h3>
                
              </div>
              </Link>
            </div>

            <div data-aos="zoom-in-up" className="col-md-6">
            <Link to="/Projectdetail">
              <div className="project-img">
                <img src={protect4} className="img-tls img-fluid" alt="" />
              </div>
              <div className="for-hover">
                <img src={protect4} className="img-tls img-fluid" alt="" />
                <h3>
                  Project Name : <span>Loreum</span>
                </h3>
                <h3>
                  Location : <span>Loreum </span>{" "}
                </h3>
                <h3>
                  Client Name: <span>Loreum ispusum </span>
                </h3>
              </div>
              </Link>
            </div>

            <div data-aos="zoom-in-up" className="col-md-6">
            <Link to="/Projectdetail">
              <div className="project-img">
                <img src={protect2} className="img-tls img-fluid" alt="" />
              </div>
              <div className="for-hover">
                <img src={protect2} className="img-tls img-fluid" alt="" />
                <h3>
                  Project Name : <span>Loreum</span>
                </h3>
                <h3>
                  Location : <span>Loreum </span>{" "}
                </h3>
                <h3>
                  Client Name: <span>Loreum ispusum </span>
                </h3>
              </div>
              </Link>
            </div>

            <div data-aos="zoom-in-up" className="col-md-6">
            <Link to="/Projectdetail">
              <div className="project-img">
                <img src={protect5} className="img-tls img-fluid" alt="" />
              </div>
              <div className="for-hover">
                <img src={protect5} className="img-tls img-fluid" alt="" />
                <h3>
                  Project Name : <span>Loreum</span>
                </h3>
                <h3>
                  Location : <span>Loreum </span>{" "}
                </h3>
                <h3>
                  Client Name: <span>Loreum ispusum </span>
                </h3>
              </div>
              </Link>
            </div>

            <div data-aos="zoom-in-up" className="col-md-6">
            <Link to="/Projectdetail">
              <div className="project-img">
                <img src={protect3} className="img-tls img-fluid" alt="" />
              </div>
              <div className="for-hover">
                <img src={protect3} className="img-tls img-fluid" alt="" />
                <h3>
                  Project Name : <span>Loreum</span>
                </h3>
                <h3>
                  Location : <span>Loreum </span>{" "}
                </h3>
                <h3>
                  Client Name: <span>Loreum ispusum </span>
                </h3>
              </div>
              </Link>
            </div>

            <div data-aos="zoom-in-up" className="col-md-6">
            <Link to="/Projectdetail">
              <div className="project-img">
                <img src={protect6} className="img-tls img-fluid" alt="" />
              </div>
              <div className="for-hover">
                <img src={protect6} className="img-tls img-fluid" alt="" />
                <h3>
                  Project Name : <span>Loreum</span>
                </h3>
                <h3>
                  Location : <span>Loreum </span>{" "}
                </h3>
                <h3>
                  Client Name: <span>Loreum ispusum </span>
                </h3>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End of Projects Section  */}
      <Footer />
    </div>
  );
}

export default Projects;
