import React from "react";
import logo from "../Assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  //   faFacebookf,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      {/* Nav top section   */}
      <section className="nav-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="nav-para">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="nav-ul">
                <ul>
                  <li className="for-border">
                    {/* <i className="fas fa-envelope" aria-hidden="true"> */}
                    <FontAwesomeIcon className="forcolor" icon={faEnvelope} />
                    <a href="mailto:jerrymlinar@icloud.com">jerrymlinar@icloud.com</a>
                  </li>
                  <li>
                    <FontAwesomeIcon className="forcolor" icon={faPhone} />
                    <a href="tel:847-204-7640">847-204-7640</a>
                  </li>
                  <div className="canvas-icon">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                  </div>
                  {/* </i> <a href="mailto:"></a></li>
                    <li><i className="fas fa-phone" aria-hidden="true"></i><a href="tel:847-204-7640">847-204-7640</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* End of Nav top section  */}

      {/* Nav Bottom section   */}
      <section className="nav-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo-dv">
                <Link to="/"> <img src={logo} className="img-tls" alt="" /></Link>
              </div>
            </div>

            <div className="col-md-6">
              <div className="nav-main-bar">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/About">About us</Link>
                  </li>
                  <li>
                    <Link to="/Service">Our Services</Link>
                  </li>
                  <li>
                    <Link to="/Projects">Our Projects</Link>
                  </li>
                  <li>
                    <Link to="/Career">Careers</Link>
                  </li>
                  <li>
                    <Link to="/Contactus">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/Certificate">Certifiate</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="nav-social-icons">
                <ul>
                  <li>
                    {" "}
                    <a>
                      {" "}
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="social-color"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="social-color"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="social-color"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="social-color"
                      />
                    </a>
                  </li>
                  <li>
                    <a>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="social-color"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="canvas-icon">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>
        </div>

      </section>

      {/* End of Nav of Bottom section    */}
      <div className="mobile-header">
        <div className="cancel">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <ul className="mobile-nav">
          <li className="nav-item">
            <Link to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/About">About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/Service">Our Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/Projects">Our Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/Career">Career</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contactus">Contact us</Link>
          </li>
          <li className="nav-item">
            <Link to="/Certificate">Certifiate</Link>
          </li>
          <li>
            {" "}
            <a>
              {" "}
              <FontAwesomeIcon
                icon={faFacebookF}
                className="social-color"
              />
            </a>
          </li>

          <li>
            <a>
              <FontAwesomeIcon
                icon={faTwitter}
                className="social-color"
              />
            </a>
          </li>

          <li>
            <a>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="social-color"
              />
            </a>
          </li>

          <li>
            <a>
              <FontAwesomeIcon
                icon={faYoutube}
                className="social-color"
              />
            </a>
          </li>

          <li>
            <a>
              <FontAwesomeIcon
                icon={faInstagram}
                className="social-color"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
