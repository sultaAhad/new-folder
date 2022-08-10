import React from "react";
import innerbanner from "../../Assets/img/innerbanner.png";
import bld from "../../Assets/img/bld.png";
import map from "../../Assets/img/map.png";
import iconc from "../../Assets/img/iconc.png";
import firepic from "../../Assets/img/firepic.png";
import Header from "../../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPhone } from "@fortawesome/free-solid-svg-icons";
import fireman from "../../Assets/img/fireman.png";
import Footer from "../../Components/Footer";

function Firepump() {
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
            <h2>Sr. Fire Pump Technician</h2>
            <a>Home </a> <span>{">>"}</span>
            <a>Career</a> <span>{">>"}</span>
            <a>Open Positions</a>
          </div>
        </div>
      </section>
      {/* End of Inner Banner section  */}

      {/* Simple row section  */}
      <section className="simple-row-sec">
        <div className="container">
          <div className="row for-padding">
            <div className="col-md-4">
              <div className="simplerow-img ">
                <img src={bld} className="img-tls img-fluid" alt="" />
                <h3>Department :</h3>
                <h2>Engeenering</h2>
              </div>
            </div>

            <div className="col-md-4 for-borders">
              <div className="simplerow-img ">
                <img src={bld} className="img-tls img-fluid" alt="" />
                <h3>Project Location(s):</h3>
                <h2>Dubai</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div className="simplerow-img ">
                <img src={bld} className="img-tls img-fluid" alt="" />
                <h3>Compensation :</h3>
                <h2>Available</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5">
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
                  <label>Attach CV PDF :</label> <br />
                  <input className="file" type="file"></input>
                  <button>Submit</button>
                </form>
              </div>
            </div>

            <div className="col-md-7">
              <div className="simplehomeimg">
                <img src={firepic} className="img-tls img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div className="row back-pic padding-back">
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

      {/* End of simple row section  */}
      <Footer />
    </div>
  );
}

export default Firepump;
