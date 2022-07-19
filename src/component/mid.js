import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./herosection";
import Login from "./login";
import Signup from "./signup";

    class Mid extends Component {

        render() {
            return (
               <Routes>

<Route path="/" element={<Home/>} ></Route>   /* This code checks and open the landing page whether the link is empty */            
<Route path="/home" element={<Home/>} ></Route>
<Route path="/login" element={<Login/>} ></Route>
<Route path="/logout" element={<Signup/>} ></Route>

               </Routes>
            );
        }
    }  
     export default Mid;