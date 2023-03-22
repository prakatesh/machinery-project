import React from 'react'
import styles from '../About/about.module.css'
import img1 from '../../assets/About/img1.jpg'
import img2 from '../../assets/About/img2.png'
import icon1 from '../../assets/About/icon1.png'
import Footer from '../Footer/Footer'
import { Container } from '@mui/system'
import AOS from 'aos';
import 'aos/dist/aos.css';
function About() {
  AOS.init();
  return (
    <div>
      <div className={styles.about}>
        <Container>
          <div className={styles.section1} >
            <div className="row">
              <div className="col-md-6">
                  <h1>OUR <span>History</span></h1>
                  <p>Power Generation Projects (Aust) Pty Ltd trading as Genergy Australia was established in 1995 and has been supporting Queensland organisations for over 25 years. What started as a small dynamic company called Generator Management Systems has grown to become a significant entity in the generator industry. In a rebranding process the trading name was changed to Genergy Australia in 2000.</p>
                  <p>Genergy Australia is proudly an Australian, family owned business which started with only one client. One client grew to many due to Genergy Australia’s unwavering commitment to its customers and their generators’ needs. This dedication has seen many of the original customers still using Genergy Australia as their generator maintenance and repair specialist today.</p>
              </div>
              <div className="col-md-6">
                <div data-aos="zoom-in-left" data-aos-duration="1000">
                  <img src={img1} alt="bjnk" />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className={styles.section2}>
          <div className="row">
            <div className="col-md-6">
              <img src={icon1} alt="fghj"/>
              <h1>Our vision</h1>
              <p>To provide our customers with exceptional service and dependable support founded on safety, quality, innovation, value and environmental sustainability.</p> 
              <p>The most important customers are not the ones we gain, but the ones we keep.  Providing the best service possible for our customers allows us to create trusted and mutually beneficial partnerships.</p>
            </div>
            <div className="col-md-6">
              <span>
                <img style={{paddingTop:"3vh"}} src={img2} alt="f" />
                <h1>Our mission</h1>
                <p>Genergy Australia will engage with our customers, identify what is important to them, and exceed their expectations.  Genergy Australia will recruit and maintain a skilful team to provide thorough maintenance programs, efficient repairs, dependable emergency response, and professional installs.  </p>
                <p>Genergy Australia will continually pursue innovations and customer driven solutions while operating in a manner which will protect the environment.</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About

