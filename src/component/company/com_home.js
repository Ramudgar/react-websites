import { Link } from 'react-router-dom';
import '../../assets/style/emp_home.css';
import ComMid from './com-mid';
function ComHome() {
    return (
       <>
       <div className="px-0 bg-light">
    <div className="d-flex ">
        <div className="d-flex align-items-center " id="navbar"> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"> <span className="fas fa-bars"></span> </button> <a className="text-decoration-none fs14 ps-2" href="#">ACQUIRED<span className="fs13 pe-2">.com</span></a> </div>
        
    </div>
    <div className="d-md-flex">
        <ul id="navbar-items" className="p-0">
           <Link to="/"><li> <span className="fas fa-th-list"></span> <span className="ps-3 name" href="/">Dashboard</span> </li></Link>   
           <Link to="/addJob"> <li> <span className="fas fa-chart-line"></span> <span className="ps-3 name">Create Jobs</span> </li></Link> 
           <Link to=""> <li> <span className="fas fa-chart-line"></span> <span className="ps-3 name">View Jobs</span> </li></Link>
           <Link to=""><li> <span className="fas fa-clipboard-check"></span> <span className="ps-3 name">Profile</span> </li></Link>
           <Link to=""><li> <span className="fas fa-calendar-alt"></span> <span className="ps-3 name">account</span> </li></Link>
        </ul>
      
{/* Defining mid here to access all the mid component */}
      <ComMid/>

</div>
    </div>

       
       
       
       
       </>
    );
}

export default ComHome;