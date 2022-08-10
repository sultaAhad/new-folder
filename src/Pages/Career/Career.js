import React, { useEffect } from "react";
import AOS from 'aos';
import innerbanner from "../../Assets/img/innerbanner.png";
import careerimg from "../../Assets/img/careerimg.png";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";

function Career() {
    const data = [
        {
            id:1,
             title:"Sr. Fire Pump Technician",
             location:"Dubai",
             exprience:"03 Years",
             department:"Engineering",
             date:"February 15, 2021",
        }
    ]
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
            <h2>Career</h2>
            <a>Home </a> <span>{">>"}</span>
            <a>Career</a>
          </div>
        </div>
      </section>
      {/* End of Inner Banner section  */}

      {/* Career section  */}
      <section  className="career-sec">
        <div className="container">
          <div className="row">
            <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="col-md-6">
              <div className="career-text">
                <h2>Career</h2>
                <p>
                  Join the pioneers At FIRE7 LLC, we always encourage and
                  welcome passionate and ambitious talents who can join us as we
                  redefine ‘Fire Protection Industry’ in the Middle East.
                </p>

                <p>
                  If you have the will to undertake challenges, empower your
                  teammates, and contribute to a mutual growth, email us your
                  updated resume or apply directly on the below positions.
                </p>
              </div>
            </div>

            <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="col-md-6">
              <div className="career-img">
                <img src={careerimg} className="img-tls img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className="col-md-12">
              <div className="position-head">
                <h2>Open Positions</h2>
              </div>
              <div className="position-table">
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Job Posting Title</th>
                      <th scope="col">Location</th>
                      <th scope="col">Experience</th>
                      <th scope="col">Department</th>
                      <th scope="col">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                 {data.map((item,index)=> {
                     return(
                        <tr key={index}>
                       
                        <td> <Link to="/Firepump">{item?.title} </Link>  </td>
                        <td>{item?.location}</td>
                        <td>{item?.exprience}</td>
                        <td>{item?.department}</td>
                        <td>{item?.date}</td>
                      </tr>
                     )
                 })}
                   
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Career section  */}
      <Footer />
    </div>
  );
}

export default Career;
