import React from "react";
import "../stylesheets/Common/Input.scss";

function Input(props) {
  const {name}=props
  return (
    <div className="input">
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        className={props.className}
        // {...props.register(name)}

      ></input>
      <div>
      <span className="error-message">{props.error}</span>
      </div>
    </div>
  );
}
export default Input;
