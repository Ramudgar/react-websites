import {useState }  from 'react';
import { Link } from 'react-router-dom';
import './../assets/style/signup.css';
import axios from 'axios';






function Signup(){
    

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const registerUser = (e) => {
    try{
    e.preventDefault();// stop the form from reloading the page
    const data = {
      
      username: username,
      email: email,
      password: password,
      role: role
    };
    
    axios.post("http://localhost:3000/user/register/", data).then((res) => {
      console.log(res.data)
      if(Response,data.success === true){
        alert("User registered successfully");
      }
      else{
        alert("User registration failed");
      }
    });
    }catch(err){
      console.log(err);
    }
  }
        return (
        <>
           
           <div className="container d-flex justify-content-center mb-5 mt-5">
  <div className="row privacy my-5">
    <div className="col-md-6 text-left text-white lcol">
      <div className="greeting"><h3>Welcome to <span className="txt">Hirex</span></h3></div>
      <h6 className="mt-3 mb-5">let's join to the largest ecosystem of the business and employment...</h6>
      <div className=" content-signup mt-5 fs-6">
        <div className="socials d-flex flex-row   justify-content-between text-white">
          <div className="d-flex flex-row" ><i className="fab fa-linkedin-in fs-6"></i><i className="fab fa-facebook-f fs-6"></i><i className="fab fa-twitter fs-6" ></i></div>
          <span>Privacy Policy</span>
          <span>&copy; 2020 Hirex</span>
        </div>
      </div>
    </div>
    <div className="col-md-6 rcol">
      <form className="sign-up">
        <h2 className="heading mb-4 ">Sign up</h2>
        <div className="form-group fone mt-2 ">
          <i className="fas fa-user text-dark"></i>
          
          <input type="name" className="form-control text-dark" placeholder="Name" 
          onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="form-group fone mt-2">
          <i className="fas fa-envelope text-dark"></i>
          <input type="email" className="form-control text-dark" placeholder=" email"
          onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="form-group fone mt-2">
          <i className="fas fa-lock text-dark"></i>
          <input type="password" className="form-control text-dark " placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
          
          ></input>
        </div>
        <div className="form-group mt-2">
            <select className=" form-control text-dark"
            onClick={(e)=>setRole(e.target.value)}
            >
                <option>Select your role</option>
                <option>employee</option>
                <option>investor</option>
                <option>company</option>
            </select>
        </div>
      </form>

        <button type="button" className="btn btn-success mt-5 fs-5"  onClick={registerUser}>Get satrted now</button>
        <p className="exist mt-4 fs-5">Existing user? <Link to="/login">Log in</Link></p>
    </div>
  </div>
</div>

        </>
    
	

           
        );
    }

export default Signup;