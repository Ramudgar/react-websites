import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ComDashboard from "./com-dashboard";
import AddJob from "./add-job";


class ComMid extends Component{
    render(){
        return(
<Routes>
<Route path="/" element={<ComDashboard/>} ></Route>   /* This code checks and open the landing page whether the link is empty */
<Route path="/addJob" element={<AddJob/>} ></Route>
</Routes>
        )
    }
}
export default ComMid;