import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import EmpDashboard from "./emp-dashboard";


class EmpMid extends Component{
    render(){
        return(
<Routes>
<Route path="/" element={<EmpDashboard/>} ></Route>   /* This code checks and open the landing page whether the link is empty */
</Routes>
        )
    }
}
export default EmpMid;