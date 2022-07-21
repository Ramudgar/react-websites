import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ComDashboard from "./com-dashboard";
import AddJob from "./add-job";
import Profile from "./profile";


class ComMid extends Component{
    render(){
        return(
<Routes>
<Route path="/" element={<ComDashboard/>} ></Route>   /* This code checks and open the landing page whether the link is empty */
<Route path="/addJob" element={<AddJob/>} ></Route>
<Route path="/addProfile" element={<Profile/>} ></Route>
</Routes>
        )
    }
}
export default ComMid;