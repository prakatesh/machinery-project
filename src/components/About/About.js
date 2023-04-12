import React from "react";
import styles from "../About/about.module.css";
import img1 from "../../assets/About/img1.jpg";
import img2 from "../../assets/About/img2.png";
import icon1 from "../../assets/About/icon1.png";
import Footer from "../Footer/Footer";
import { Container } from "@mui/system";
function About() {
  return (
    <div>
      <div className={styles.about}>
        <Container>
          <div className={styles.section1}>
            <div className="row">
              <div className="col-md-6">
                <h1>
                  OUR <span>History</span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime libero totam qui vero consequatur architecto nulla
                  numquam exercitationem delectus quis. Sapiente quos rem
                  doloremque ex, vel numquam excepturi aliquam ab? Explicabo vel
                  sunt doloremque enim iste doloribus itaque eligendi voluptate
                  quis fuga ipsum non obcaecati ratione optio consectetur dicta
                  eos, laborum in cum maxime ducimus blanditiis.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita magnam consequuntur asperiores, excepturi
                  reprehenderit, corporis quam nesciunt, ut veritatis soluta cum
                  voluptatibus tempore aliquid minus modi suscipit qui ex non!
                  In, animi cum tenetur atque officiis aliquam rerum quisquam
                  quam voluptatibus maiores tempore vero voluptatum, quasi eaque
                  adipisci. Perspiciatis iusto commodi cupiditate obcaecati aut
                  fugiat ullam inventore nisi odit dolores.
                </p>
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
              <img src={icon1} alt="fghj" />
              <h1>Our vision</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                voluptas reiciendis ex quia id quasi, rem ullam dolorem dolor
                voluptatum sapiente dolorum esse illum minima odio eligendi quod
                aliquid quae. Quod, ipsam iusto!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                voluptatibus dignissimos optio mollitia. Nihil quis facere
                consequuntur iure magnam repellendus perspiciatis dolorem aut
                distinctio, minus quisquam, nostrum aspernatur ea quam.
              </p>
            </div>
            <div className="col-md-6">
              <span>
                <img style={{ paddingTop: "3vh" }} src={img2} alt="f" />
                <h1>Our mission</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem fugiat officia in adipisci recusandae, repudiandae
                  consequuntur possimus quo molestias reprehenderit libero
                  similique numquam? Veritatis unde architecto illum dolor,
                  dolorum minima.{" "}
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium minus tempore eos, quae repudiandae placeat
                  expedita distinctio animi vero sequi iste asperiores nobis
                  alias fuga quas tempora mollitia in quisquam.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
