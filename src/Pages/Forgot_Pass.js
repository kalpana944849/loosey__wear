import React from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import "../stylesheets/Common/Forgot_Pass.scss";

function Forgot__Pass() {
  return (
    <div className="forgot">
      <div className="container">
        <div className="forgot__section">
          <h1>Forgot Password</h1>
          <div className="forgot__section__fields">
            <Input type="email" placeholder="Email" className="" />
            <Input type="password" placeholder="Password" className="" />
            <Input
              type="password"
              placeholder="Confirm Password"
            />
            <Button type="submit" name="Submit"  className="button__sectionF"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Forgot__Pass;
