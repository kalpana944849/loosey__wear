import React from "react";
import { useState } from "react";
import Image1 from "../Images/logo-retina.png";
import "../stylesheets/Common/Navbar.scss";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  let nav = [
    { route: "/buy", name: "BUY T-SHIRTS" },
    { route: "/women", name: "WOMEN" },
    { route: "/men", name: "MEN" },
    { route: "/about", name: "ABOUT" },
    { route: "/contact", name: "CONTACT" },
  ];
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenRight: false,
  });

  const logIn = () => {
    navigate("/login");
  };

  const closeNav = () => {
    setOpen(!open);
    document.getElementById("mySidenav").style.width = "0";
  };

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "360px";
  };
  
  const toggleMode=() =>{
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

  return (
    <div className="navbar">
      <div className="row "style={{alignItems:"center"}}>
        <div className="navbar__section1">
          <div className="navbar__section1__A">
            <ul>
              {nav.map((item) => (
                <li>
                  <NavLink to={item.route}> {item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar__section1__B"></div>
        </div>
        <div className="navbar__section2">
          <a href="/">
            <img src={Image1} />
          </a>
        </div>
        <div className="navbar__section3">
          <div className="row">
            <div className="navbar__section3__A"></div>
            <div className="navbar__section3__B">
              <div className="row">
                <div className="navbar__section3__B__a">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="navbar__section3__B__b">
                  <h4>$0.00</h4>
                  <i
                    class="fa fa-shopping-basket"
                    aria-hidden="true"
                    onClick={() => setState({ isPaneOpenRight: true })}
                  ></i>
                  <span>0</span>
                  <SlidingPane
                    closeIcon={
                      <div>
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </div>
                    }
                    isOpen={state.isPaneOpenRight}
                    from="right"
                    width="400px"
                    onRequestClose={() => setState({ isPaneOpenRight: false })}
                  >
                    <div>No product in the cart.</div>
                  </SlidingPane>
                  <i class="fa fa-sun-o" aria-hidden="true" onClick={toggleMode}></i>
                  <div className="menu__bars">
                    <a href="#">
                      <i
                        class="fa fa-bars"
                        aria-hidden="true"
                        onClick={openNav}
                      ></i>
                    </a>
                  </div>
                  <div id="mySidenav" className="sidenav">
                    <a
                      href="javascript:void(0)"
                      class="closebtn"
                      onClick={closeNav}
                    >
                      &times;
                    </a>

                    <NavLink to="/login">LOG IN</NavLink>
                    {nav.map((item) => (
                      <NavLink to={item.route}> {item.name}</NavLink>
                    ))}
                  </div>
                </div>
                <div className="navbar__section3__B__c" onClick={logIn}>
                  <p>LOG IN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
