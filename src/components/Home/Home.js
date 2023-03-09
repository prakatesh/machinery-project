import React from "react";
import img1 from "../../assets/Home/img1.jpg";
import img2 from "../../assets/Home/img2.jpg";
import styles from "../Home/home.module.css";
function Home() {
  return (
    <div>
      <div className={styles.section1}>
        <div className="row">
          <div className="col-md-6">
            <h1>
              Preventative <span>Maintenance</span>
            </h1>
            <p>
              It is imperative that your generator be serviced on a regular
              basis to ensure that it is capable of starting in the event of a
              power outage. Your investment in a generator is only justified if
              its starts and provides power when required so there is no
              interruption to the running of your organisation.
            </p>
            <p>
              There are 3 key preventative maintenance services that address the
              most common reasons why your generator won’t start, to ensure our
              valued clients are not wasting their money with unnecessary
              maintenance costs.
            </p>
          </div>
          <div className="col-md-6">
            {/* <div data-aos="fade-down"></div> */}
            <img src={img1} alt="hj" />
          </div>
        </div>
      </div>
      <div className={styles.section2}>
        <div className="row">
          <div className="col-md-6">
            <img src={img2} alt="hj" />
          </div>
          <div className="col-md-6">
            <h1>
              SCHEDULED <span>Maintenance</span>
            </h1>
            <p>
              It is imperative that your generator be serviced on a regular
              basis to ensure that it is capable of starting in the event of a
              Power outage. Your investment in a generator is only justified if
              its starts and provides power when required so there is no
              interruption to the running of your organisation.
            </p>
            <p>
              The benefit of a generator is wasted if it fails to start because
              of a simple battery failure or blown fuse and these are more
              common occurrences than people would assume.
            </p>
            <p>
              The price of a scheduled maintenance program is small in
              comparison to the cost to your organisation of a generator that
              lets you down when the power goes out.
            </p>
            <p>
              Genergy Australia provides a service that is thorough, methodical,
              and assists in ensuring that your generator will start when
              required. We can provide monthly, bi-monthly, quarterly,
              six-monthly or annual maintenance programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
