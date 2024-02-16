import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Image1 from "../Images/about.jpg";
import "../stylesheets/Common/About.scss";
import Image2 from "../Images/About2.jpg";

function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="about">
        <div className="container">
          <div className="about__section1">
            <h1>About</h1>
            <div className="line"></div>
            <h5>
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
              ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
            </h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
              ante vel mauris molestie dignissim non eget nunc. Integer ac massa
              orci. Suspendisse vulputate semper nunc eget rhoncus. Ut sit amet
              porta sem, interdum tincidunt libero. Nulla vel quam lobortis,
              varius est scelerisque, dapibus nisl.
            </p>
          </div>
          <div className="about__section3">
            <div className="about__section3__main">
              <h2>How it Started</h2>
              <div className="line"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="about__section3__main2">
              <div className="row">
                <div className="section3__A">
                  <h3>Vel mauris molestie dignissim</h3>
                  <h5>
                    Proin eu ante vel mauris molestie dignissim non eget nunc.
                    Integer ac massa orci. Suspendisse vulputate semper nunc
                    eget rhoncus.
                  </h5>
                  <p>
                    Praesent vel faucibus ligula. Sed sit amet ipsum eget velit
                    aliquet faucibus. Maecenas et odio id turpis sollicitudin
                    pulvinar sit amet vitae augue. Phasellus nec ultricies arcu.
                    Quisque efficitur tellus sit amet bibendum molestie. Duis id
                    egestas odio. Phasellus lacinia ex quis faucibus tempor. Sed
                    feugia.
                  </p>
                </div>
                <div className="section3__B">
                  {" "}
                  <img src={Image2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default About;
