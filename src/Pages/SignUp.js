import React, { useState } from "react";
import Input from "../Components/Input";
import "../stylesheets/Common/SignUp.scss";
import Button from "../Components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../stylesheets/Common/Input.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API } from "../API/API";

const schema = yup.object({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup.string().required("Password is required."),
});

function SignUp() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("function is called", data);
    registerUser(data)
  };

 const registerUser = async(data)=>{
   try{
    setLoader(true)
    const response = await API.Signup(data)
    console.log('response', response)
    if(response.success)
    {
      toast.success(response.message)
      navigate('/login')
    }
   }
   catch(error)
   {
    console.log(error)
    toast.error('Already Registered')
   }
   finally
   {
    setLoader(false)
   }
 }
  const returnHome = () => {
    navigate("/home");
  };

  const onError = (errors, e) => console.log("error", errors, e);
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="signup__main">
            <h1>Create Account</h1>
            <p>Please Register using account detail below</p>
            <div className="signup__input">
              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="input__field">
                  <input
                    // className="input"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    {...register("firstname")}
                  />
                  <div>
                    <span className="error-message">
                      {errors.firstname?.message}
                    </span>
                  </div>
                </div>
                <div className="input__field">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    {...register("lastname")}
                  />
                  <div>
                    <span className="error-message">
                      {errors.lastname?.message}
                    </span>
                  </div>
                </div>
                <div className="input__field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    {...register("email")}
                  />
                  <div>
                    <span className="error-message">
                      {errors.email?.message}
                    </span>
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
                <div className="input__button">
                  {!loader ? (
                    <Button
                      type="submit"
                      name="Create"
                      className="button__sectionF"
                    />
                  ) : (
                    <button className="button__loader" disabled={loader}>
                      <div className="icon">
                        <i className="fa fa-refresh fa-spin"></i>
                      </div>
                    </button>
                  )}
                </div>
              </form>
              <p onClick={returnHome}>Return to Store</p>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}
export default SignUp;
