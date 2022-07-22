import { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./herosection";
import Login from "./login";
import Signup from "./signup";
import Logout from "./logout";
import ComDashboard from "./company/com-dashboard";
import AddJob from "./company/add-job";
import Profile from "./company/profile";
import ViewJobs from "./company/view-jobs";
import Setting from "./company/setting";
import EditJob from "./company/job-edit";

    class Mid extends Component {

        render() {
            return (
               <Routes>
<Route path="/" element={<Home/>} ></Route>   /* This code checks and open the landing page whether the link is empty */            
<Route path="/home" element={<Home/>} ></Route>
<Route path="/login" element={<Login/>} ></Route>
<Route path="/signup" element={<Signup/>} ></Route>
<Route path="/logout" element={<Logout/>} ></Route>
<Route path="/dashboard" element={<ComDashboard/>} ></Route>   
<Route path="/addJob" element={<AddJob/>} ></Route>
<Route path="/addProfile" element={<Profile/>} ></Route>
<Route path="/viewJob" element={<ViewJobs/>} ></Route>
<Route path="/setting" element={<Setting/>} ></Route>
<Route path="/editJob" element={<EditJob/>} ></Route>


               </Routes>
            );
        }
    }  
     export default Mid;