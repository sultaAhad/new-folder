import React, { Component } from "react";
import Slider from "react-slick";
import manpic from "../Assets/img/manpic.png";
import p from "../Assets/img/p.png";
export default class Testimonial  extends Component {
  render() {
    const settings = {
      arrow: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "blue",
            border: "1px blue solid"
          }}
        >
          {i + 1}
        </div>
      )
    
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="row slide-padding">
              <div className="col-md-6">
                <div className="slide-text">
                  {/* <h3>Testimonial</h3> */}
                  <h2>What Do Our Clients Say?</h2>

                  <div className="man">
                    <img src={manpic} className="img-tls img-fluid" alt="" />
                    <div className="man-div">
                      <h4>John Doe</h4>
                      <h5>Customer</h5>
                    </div>
                  </div>
                  <div className="man">
                    <p>
                    FireTech   Fire   Fighting   LLCensured   that   my   work   place   wasprotected from any fire outbreak and we are prepared to deal with anyhazardous situation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 for-corner">
                <div className="slide-img">
                  <img src={p} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row slide-padding">
              <div className="col-md-6">
                <div className="slide-text">
                  <h3>Testimonial</h3>
                  <h2>What Do Our Clients Say?</h2>

                  <div className="man">
                    <img src={manpic} className="img-tls img-fluid" alt="" />
                    <div className="man-div">
                      <h4>John Doe</h4>
                      <h5>Customer</h5>
                    </div>
                  </div>
                  <div className="man">
                    <p>
                    They   provided   us   with   a   one-stop   solution   for   our   fire   safety   andprotection needs. They ensured that everything safety measures in thebuilding   were   installed   properly   and   on   time,   helping   us   achieve   oursafety   measures.   We   are   really   satisfied   to   have   them   work   on   ourproject.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 for-corner">
                <div className="slide-img">
                  <img src={p} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row slide-padding">
              <div className="col-md-6">
                <div className="slide-text">
                  <h3>Testimonial</h3>
                  <h2>What Do Our Clients Say?</h2>

                  <div className="man">
                    <img src={manpic} className="img-tls img-fluid" alt="" />
                    <div className="man-div">
                      <h4>John Doe</h4>
                      <h5>Customer</h5>
                    </div>
                  </div>
                  <div className="man">
                    <p>
                    I   am   happy   to   say   that   after   the   initial   consultations,   the   team   atFireTech Fire Fighting LLCcompletely changed my perspective withtheir   knowledge   and   understanding   of   the   situation.   Their   technicalskills are impressive, and I felt comfortable with their  fire protectionservices   and   their   ability   to   handle   the   projects   under   timeconstraints.   Thank   you   very   much   for   making   this   experience   sosmooth and pleasant.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 for-corner">
                <div className="slide-img">
                  <img src={p} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row slide-padding">
              <div className="col-md-6">
                <div className="slide-text">
                  <h3>Testimonial</h3>
                  <h2>What Do Our Clients Say?</h2>

                  <div className="man">
                    <img src={manpic} className="img-tls img-fluid" alt="" />
                    <div className="man-div">
                      <h4>John Doe</h4>
                      <h5>Customer</h5>
                    </div>
                  </div>
                  <div className="man">
                    <p>
                    I’m pleased to say that this  fire protection company is  one of ourmost   trusted   business   partners,   and   we   would   recommend   them   toanyone looking for fire protection equipment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 for-corner">
                <div className="slide-img">
                  <img src={p} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row slide-padding">
              <div className="col-md-6">
                <div className="slide-text">
                  <h3>Testimonial</h3>
                  <h2>What Do Our Clients Say?</h2>

                  <div className="man">
                    <img src={manpic} className="img-tls img-fluid" alt="" />
                    <div className="man-div">
                      <h4>John Doe</h4>
                      <h5>Customer</h5>
                    </div>
                  </div>
                  <div className="man">
                    <p>
                    They   ensured   that   the   equipment   they   provided   complies   withinternational   standards.   They   always   offer   regular   maintenance   andensure that all the installed equipment are working fine. All in all, I amcompletely satisfied with their fire protection services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 for-corner">
                <div className="slide-img">
                  <img src={p} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row slide-padding">
              <div className="col-md-6">
                <div className="slide-text">
                  <h3>Testimonial</h3>
                  <h2>Our Clients Say</h2>

                  <div className="man">
                    <img src={manpic} className="img-tls img-fluid" alt="" />
                    <div className="man-div">
                      <h4>John Doe</h4>
                      <h5>Customer</h5>
                    </div>
                  </div>
                  <div className="man">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Proin aliquet maurisa volutpat lobortis erat
                      libero condimentum metus, eu tincidunt felis ligula in
                      turpis. Cras sit amet tristique libero. Praesent neque
                      ante pretium sollicitudin eu tincidunt felis ligula in
                      turpis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 for-corner ">
                <div className="slide-img">
                  <img src={p} className="img-tls img-fluid" alt="" />
                </div>
              </div>
            </div> 
          </div>
        </Slider>
      </div>
    );
  }
}
