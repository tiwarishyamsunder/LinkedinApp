import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import {MdSchool} from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);
      toast.success("Signed In to Linkedin!");
      localStorage.setItem("userEmail", res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };
  
  return (
    <div className="login-wrapper">
      <div className='header-container'>
        <p>
          <strong>Student LinkedIn</strong>
        </p>
        <MdSchool className='header-icon' color="rgb(0, 153, 255)"/>
      </div>
      <div className="login-wrapper-inner">
      <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>
        <Box
        component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '28ch' },
          }}
          noValidate
          autoComplete="off"
        >
          
          <div>
          <TextField 
          id="standard-basic" 
          label="Parents Email or Phone" 
          variant="standard" 
          onChange={(event) =>
                  setCredentials({ ...credentails, email: event.target.value })
                } />
          </div>
          <div>
            
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(event) =>
                setCredentials({ ...credentails, password: event.target.value })
              }
            />
            
          </div> 
          <div>
          <Button variant="outlined" onClick={login} className="login-btn">Sign in</Button>
          </div>

        </Box>
        <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
      </div>
    </div>
  );
}

