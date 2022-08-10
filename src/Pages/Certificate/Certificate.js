import React, { useEffect } from "react";
import AOS from 'aos';
import innerbanner from "../../Assets/img/innerbanner.png";
import certi from "../../Assets/img/certi.png";
import certi2 from "../../Assets/img/certi2.png";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Certificate() {
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
            <h2>Certifications</h2>
            <a>Home </a> <span>{">>"}</span>
            <a>Certification</a>
          </div>
        </div>
      </section>
      {/* End of Inner Banner section  */}

      {/* Certification section  */}
      <section  className="certificate-sec">
        <div className="container">
          <div className="row">
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-6">
              <div className="certificate-text">
                <h2>Certifiate Name</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="certificateimg">
                <img src={certi} className="img-tls img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="certificateimg">
                <img src={certi} className="img-tls img-fluid" alt="" />
              </div>
            </div>

            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-6">
              <div className="certificate-text">
                <h2>Certifiate Name</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of Certification section  */}

      <Footer  />
    </div>
  );
}

export default Certificate;
