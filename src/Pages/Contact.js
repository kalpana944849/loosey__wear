import React from "react";
import Navbar from "../Components/Navbar";
import "../stylesheets/Common/Contact.scss";
import Footer from "../Components/Footer";
import Input from "../Components/Input";
import Button from "../Components/Button";

function Contact() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="contact">
        <div className="row">
          <div className="contact__section1">
            <h1>Contact</h1>
            <div className="line"></div>
            <h5>
              Proin eu ante vel mauris molestie dignissim non eget nunc. Integer
              ac massa orci. Suspendisse vulputate semper nunc eget rhoncus.
            </h5>
          </div>
          <div className="contact__section2">
            <div className="row">
              <div className="contact__section2A">
                <div style={{padding:"20px 16px"}}>
                  <h2>Get in touch</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    id leo tempor, congue justo at, lobortis orci.
                  </p>
                  <ul>
                    <li>
                      <a href="#map">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        123 Fifth Avenue, New York, NY 10160
                      </a>
                    </li>
                    <li>
                      <a href="#contact">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        contact@info.com
                      </a>
                    </li>
                    <li>
                      <a href="#phone" style={{ textDecoration: "none" }}>
                        <i
                          className="fa fa-phone phone"
                          aria-hidden="true"
                          style={{ borderBottom: "none" }}
                        ></i>
                        9-334-7565-9787
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contact__section2B">
                <form>
                  <div>
                    <div className="row">
                      <div className="first">
                        <Input
                          type="text"
                          placeholder="First Name"
                          className="input__name"
                        />
                      </div>
                      <div className="second">
                        <Input
                          type="text"
                          placeholder="Second Name"
                          className="input__name"
                        />
                      </div>
                    </div>
                  </div>
                  <Input
                    type="email"
                    placeholder="Your email address..."
                    className="input__form"
                  />
                  <textarea
                    placeholder="Message..."
                    rows="6"
                    cols="61"
                  ></textarea>
                  <Button
                    type="submit"
                    name="Send"
                    className="button__sectionform"
                  />
                </form>
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
export default Contact;
