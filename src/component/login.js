// import { Component } from "react";
//  class Login extends Component {
//   render() {
//     return ();
//   }
// }
// export default Login;

import { toast } from "react-toastify";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';




const theme = createTheme();
export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role,setRole]=useState("");
  const [Message, setMessage] = useState("");
  const LoginUser =async (e) => {
    try {
    //   e.preventDefault(); // stop the form from reloading the page
      const data = {
        email: email,
        password: password,
        role: role
      };
      await axios
        .post("http://localhost:3000/user/login", data)
        .then((res) => {
          // if(res.data.success === true){
          //   alert("User logged in successfully");

          // }
          // else{
          //   alert("User registration failed");
          // }
          


          if(res.data.token){
              console.log(res)
              localStorage.setItem('token', res.data.token);
              localStorage.setItem('userId', res.data.user._id);
              localStorage.setItem('role', res.data.user.role);

              if(role==="company"){
                // toast.success("Logged in successfully!", {
                //   position: toast.POSITION.TOP_CENTER
                // })
                
              window.location.replace('/dashboard');
            }
              else if(role==="employee"){
                // toast.success("Logged in successfully!", {
                //   position: toast.POSITION.TOP_CENTER
                // })
                window.location.replace("signup");
              }
             
              else{
                window.location.replace("signup");
              }
          }else if(email ===null && password===null && role===null){
              setMessage("Please some fields are empty");
              alert(Response.data.msg);
          }
          else if(role===null){
            setMessage("Please select a role");
            alert("Please select a role");
          }
          else{
            setMessage("Invalid email or password");
            alert(res.data.msg) ;
          }
        });
    } catch (err) {
      console.log(err);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setPassword(e.target.value)}
            />
       {/* dropdown */}
           <div className="form-group mt-2 border-1-dark border-box shadow p-1">
            <select className=" form-control text-dark"  onClick={(e)=>setRole(e.target.value)}>
                <option>Select your role</option>
                <option>employee</option>
                <option>investor</option>
                <option>company</option>
            </select>
        </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            onClick={LoginUser}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item sx={{  mb: 30 }}>
                <Link href="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}