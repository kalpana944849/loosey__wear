import React, { useState } from "react";
import Input from "../Components/Input";
import Button from "../Components/Button";
import "../stylesheets/Common/LogIn.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { API } from "../API/API";

const schema = yup.object({
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup.string().required("Password is required."),
});

function Login() {
  const [loader, setLoader] = useState(false)
  const navigate = useNavigate();


  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  //User login API intergration ...
  const UserLogin = async (data) => {
    try {
      setLoader(true)
      const response = await API.Login(data)
      console.log('the response of the website is', response)
      console.log('response')
      if (response.success) {
        localStorage.setItem('token', response.data.token)
        navigate('/home')
      }
    }
    catch (e) {
      console.log(e)
    }
    finally {
      setLoader(false)
    }
  }

  const onSubmit = (data, e) => {
    console.log("funciton is called", data);
    console.log(data);
    UserLogin(data)
  };

// Register User function ...
  const create = () => {
    navigate("/signup");
  };

  // Forgot User Function ...
  const forgot = () => {
    navigate("/forgot");
  };



  const onError = (errors, e) => console.log("error", errors, e);


  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="login__main">
            <h1>Login</h1>
            <p>Please login using account detail below.</p>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div className="input__field">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  {...register("email")}
                />
                <div>
                  <span className="error-message">{errors.email?.message}</span>
                </div>
              </div>
              <div className="input__field">

                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  {...register("password")}
                />


                <div>
                  <span className="error-message">
                    {errors.password?.message}
                  </span>
                </div>
              </div>
              <div>
                <Button
                  name="Sign In"
                  type="submit"
                  className="button__sectionF"
                />
                <h5 onClick={forgot}>Forgot your password?</h5>
              </div>
            </form>
            <h5 onClick={create}>Create account</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
