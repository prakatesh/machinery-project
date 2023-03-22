import { Container } from "@mui/system";
import React from "react";
import img1 from "../../assets/Home/img1.jpg";
import img2 from "../../assets/Home/img2.jpg";
import img3 from "../../assets/Home/img3.jpg";
import Footer from "../Footer/Footer";
import styles from "../Home/home.module.css";
function Home() {
  return (
    <div>
      <Container>
        <div className={styles.section1}>
          <div className="row">
            <div className="col-md-6" data-aos="flip-left"  data-aos-duration="2000">
              <h1>
                Preventative <span>Maintenance</span>
              </h1>
              <p>
                It is imperative that your generator be serviced on a regular
                basis to ensure that it is capable of starting in the event of a
                power outage. Your investment in a generator is only justified
                if its starts and provides power when required so there is no
                interruption to the running of your organisation.
              </p>
              <p>
                There are 3 key preventative maintenance services that address
                the most common reasons why your generator won’t start, to
                ensure our valued clients are not wasting their money with
                unnecessary maintenance costs.
              </p>
            </div>
            <div className="col-md-6">
              <div data-aos="flip-right"  data-aos-duration="2000" >
                <img src={img1} alt="hj" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className={styles.container2}>
        <div className={`${styles.section2}`}>
          <div className="row">
            <div className="col-md-6">
            <div data-aos="flip-left"  data-aos-duration="2000" >
              <img src={img2} alt="hj"/>
            </div>
            </div>
            <div className="col-md-6" data-aos="flip-right"  data-aos-duration="2000">
              <h1>
                SCHEDULED <span>Maintenance</span>
              </h1>
              <p>
                It is imperative that your generator be serviced on a regular
                basis to ensure that it is capable of starting in the event of a
                Power outage. Your investment in a generator is only justified
                if its starts and provides power when required so there is no
                interruption to the running of your organisation.
              </p>
              <p>
                The benefit of a generator is wasted if it fails to start
                because of a simple battery failure or blown fuse and these are
                more common occurrences than people would assume.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <div className={styles.section3}>
          <div className="row">
            <div className="col-md-6" data-aos="flip-left"  data-aos-duration="2000">
              <h1>MAINS FAILURE <span>TESTING</span></h1>
              <p>Through our experience with clients, it has been found that on average a generator is actually called to operate about once a year. Even though the generator is not used regularly, there are potential issues with the generator not performing when your organisation needs it most</p>
              <p>Servicing covers the majority of the potential issues of a generator not starting however to ensure your generator is 100% reliable there is one important service recommendation which is to complete a mains failure test.</p>
            </div>
            <div className="col-md-6">
              <div data-aos="flip-right" data-aos-duration="2000">
                <img src={img3} alt="abi"/>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer/>
    </div>
  );
}

export default Home;
