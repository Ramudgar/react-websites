import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Home from "./herosection";

    class Mid extends Component {

        render() {
            return (
               <Routes>
                
<Route path="/home" element={<Home/>} ></Route>
<Route path="/login" element={<Login/>} ></Route>

               </Routes>
            );
        }
    }  
     export default Mid;