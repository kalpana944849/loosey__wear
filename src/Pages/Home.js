import React from "react";
import Navbar from "../Components/Navbar";
import Image1 from "../Images/hero.png";
import Button from "../Components/Button";
import "../stylesheets/Common/Home.scss";
import Summer from "./Summer";
import Footer from "../Components/Footer";
import BaseCollection from "./Basecollection";
import Spring from "./Spring";
import Sale from "./Sale";
import Review from "./Review";
import Category from "./Category";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div>
          <Navbar />
        </div>
        <div className="home__screen">
          <div className="row home__screen__bg">
            <div className="home__screen__section1">
              <div>
                <p>WOMEN</p>
                <div className="section1__heading">
                  <h1>Slick. Modern.</h1>
                  <h1>Awesome.</h1>
                </div>
                <Button
                  type="submit"
                  name="Shop Collection"
                  className="button__sectionF"
                />
              </div>
            </div>
            <div className="home__screen__section2">
              <img src={Image1} />
            </div>
          </div>
        </div>
        <div>
          <Summer />
        </div>
        <div>
          <BaseCollection />
        </div>
        <div>
          <Spring />
        </div>
        <div>
          <Sale />
        </div>
        <div>
          <Review />
        </div>
        <div>
          <Category />
        </div>
        <div>
          <h4>No more products to show....</h4>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default Home;
