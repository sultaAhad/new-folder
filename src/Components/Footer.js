import React from "react";
import logo from "../Assets/img/logo.png";
import arrow from "../Assets/img/arrow.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-img">
                <img src={logo} className="img-tls img-fluid" alt="" />
                <p>
                The   FTF   is   a   veteran   of   the   fire   protection   and   safety   equipment   industrybased in Dubai and Sharjah. We supply, install, and provide maintenance ofprotective   tools   and   devices   to   keep   the   public   safe   and   away   from   anypotential harm. With more than 15 years of experience in the industry, ourproduct knowledge and experience is second to none
                </p>
              </div>
            </div>

            <div className="col-md-2">
              <div className="footer-head">
                <h3>Support</h3>
              </div>
              <div className="footer-social">
                <ul>
                  <li>
                    <Link to="/Contactus" >Contact</Link>
                  </li>
                  <li>
                    <a >Knowledge Base</a>
                  </li>
                  <li>
                    <a >Community</a>
                  </li>

                 
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="footer-head">
                <h3>Quick Links</h3>
              </div>
              <div className="footer-social">
                <ul>
                  <li>
                    <a >Lorem ipsum</a>
                  </li>
                  <li>
                    <a >Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="">Lorem ipsum</a>
                  </li>

                  <li>
                    <a href="">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="footer-head">
                <h3>News & Info</h3>
              </div>
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditons</a>
                  </li>
                  <li>
                    <a href="">Privicy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <div className="footer-head">
                <h3>Get In Toch</h3>
               </div>
                <div className="footer-social">
                <ul>
                  <li>
                    <a href="mailto:Lorem ipsum@Email.com">
                      Lorem ipsum@Email.com
                    </a>
                  </li>
                  <li>
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit,{" "}
                    </p>
                  </li>
                  <li>
                    <input type="text" placeholder="Your email address"></input>
                  </li>
                  <div className="aroow">
                  <img src={arrow} className="img-tls img-fluid" alt="" />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© Copyright Fire Tech Fire Fighting 2022. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
