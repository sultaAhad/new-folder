import React from "react";
import innerbanner from "../../Assets/img/innerbanner.png";
import pdetail from "../../Assets/img/pdetail.png";
import efire from "../../Assets/img/efire.png";
import Header from "../../Components/Header";

import NonLinearSlider, {Range} from '../../Components/Range'
import Footer from "../../Components/Footer";

function Projectdetail() {
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
            <h2>Our Project Detail</h2>
            <a>Home </a> <span>{">>"}</span>
            <a>Our Projects</a> <span>{">>"}</span>
            <a>Project Detail</a>
          </div>
        </div>
      </section>
      {/* End of Inner Banner section  */}

      {/* Project detail section  */}
      <section className="project-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="projectsec-img">
                <img src={pdetail} className="img-tls img-fluid" alt="" />
              </div>

              <div className="projectsec-text">
                <h2>Protected By Fire 7</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Proin aliquet maurisa volutpat lobortis erat libero
                  condimentum metus, eu tincidunt felis ligula in turpis. Cras
                  sit amet tristique libero. Praesent neque ante pretium
                  sollicitudin eu tincidunt felis ligula in turpis.
                </p>
                <h5>
                  Client Name : <span>Lorem Ipsum</span>{" "}
                </h5>
                <h5>
                  Project Name : <span>Lorem Ipsum</span>{" "}
                </h5>
                <h5>
                  Location :{" "}
                  <span>Loremipsumdolor sitamet consec tetura dipis cing</span>{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Project detail section  */}

      {/* <Skills section  */}
      <section className="skills-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="skills-text">
                <h2>Our Skills</h2>
                <p>
                  Fire brigades do not believe in mouth they believe in work.
                  From their history we see that they saved 3800+ lives and many
                  properties already. They are dedicated to saving lives and
                  fire brigs give their services 24/7.Fire brigades do not
                  believe in mouth they believe in work. From their history we
                  see that they saved 3800+ lives
                </p>
                <h4>Lorem ipsum</h4>
                <NonLinearSlider />
                <h4>Lorem ipsum</h4>
                <NonLinearSlider />
                <h4>Lorem ipsum</h4>
                <NonLinearSlider />
                <h4>Lorem ipsum</h4>
                <NonLinearSlider />
              </div>
            </div>

            <div className="col-md-6">
              <div className="skils-img">
                <img src={efire} className="img-tls img-fluid" alt="" />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      {/* <End of Skills Section  */}
      <Footer />
    </div>
  );
}

export default Projectdetail;
