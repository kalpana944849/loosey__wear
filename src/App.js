import "./App.css";
import Main from "../src/Main";
import "./App.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
let token = localStorage.getItem('token')

  // const navigate = useNavigate()
  // useEffect(()=>{
  //  if(token)
  //  {
  //   navigate('/home')
  //  }
  // },[token])

  return (
    <>
      <Main />
    </>
  );
}

export default App;
