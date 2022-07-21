import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ComDashboard from "./com-dashboard";
import AddJob from "./add-job";
import Profile from "./profile";
import ViewJobs from "./view-jobs";
import Setting from "./setting";


class ComMid extends Component{
    render(){
        return(
<Routes>
<Route path="/" element={<ComDashboard/>} ></Route>   /* This code checks and open the landing page whether the link is empty */
<Route path="/addJob" element={<AddJob/>} ></Route>
<Route path="/addProfile" element={<Profile/>} ></Route>
<Route path="/viewJob" element={<ViewJobs/>} ></Route>
<Route path="/setting" element={<Setting/>} ></Route>
</Routes>
        )
    }
}
export default ComMid;