import React from "react";
import Button from "../Components/Button";
import "../stylesheets/Common/Footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="row footer__bg">
        <div className="footer__section">
          <div className="footer__section__text">
            <h3>Subscribe To Get Offers In Your Inbox</h3>
            <p className="text__para"
            >
              Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod
              condimentum
            </p>
            <div
              className="row footer__fields"
            >
              <input
                type="text"
                placeholder="Your email address..."
              />
              <Button
                type="submit"
                name="Subscribe"
                className="button__sectionFooter"
              />
            </div>
          </div>
          <div className="footer__section__menu">
            <div className="row menu">
              <p><NavLink to="/buy" className="content">Buy T-Shirts</NavLink></p>
              <p><NavLink to="/women"className="content">Women</NavLink></p>
              <p><NavLink to="/men" className="content">Men</NavLink></p>
            </div>
            <div className="row menu">
              <p><NavLink to="/about"className="content">About</NavLink></p>
              <p><NavLink to="/contact" className="content">Contact</NavLink></p>
            </div>
          </div>
          <div
            className="row footer__icons"
          >
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i
              className="fa fa-twitter"
              aria-hidden="true"
            ></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
        </div>
        <div className="footer__Copyright">
          <p className="copyright"
          >
            Copyright © 2023 T-Shirts Store | Powered by T-Shirts Store
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
