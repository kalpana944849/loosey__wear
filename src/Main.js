import "./App.css";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
// import Contact from "./Pages/Contact";
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Detail from "../src/Pages/Detail";
import Cart from "../src/Pages/Cart";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Buy from "./Pages/Buy";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Forgot__Pass from "./Pages/Forgot_Pass";
function App() {
  return (
    <>
      <Switch>
        <Routes>
        <Route path="/"
          element={<Home/>} />
           <Route path="/signup"
          element={<SignUp/>} />
           <Route path="/login"
          element={<LogIn/>} />
          <Route path="/forgot"
          element={<Forgot__Pass/>}/>   
          <Route path="/home"
          element={<Home/>}/>
          <Route path="detail"
          element={<Detail/>}/>
          <Route path="/cart"
          element={<Cart/>}/>   
          <Route path="/about"
          element={<About/>}/>
          <Route path="/contact"
          element={<Contact/>}/>
          <Route path="/buy"
          element={<Buy/>}/>
          <Route path="/women"
          element={<Women/>}/>
             <Route path="/men"
          element={<Men/>}/>
        </Routes>
      </Switch>
    </>
  );
}

export default App;
