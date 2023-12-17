import React, { useState } from "react";
import { RegisterAPI } from "../api/AuthAPI";
import { postUserData } from "../api/FirestoreAPI";
import {MdSchool} from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import { getUniqueID } from "../helpers/getUniqueId";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});
  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);
      toast.success("Account Created!");
      postUserData({
        userID: getUniqueID(),
        name: credentails.name,
        email: credentails.email,
        imageLink:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJuEbagsVjrCi7QF5Qi5Nt8soDKcb6vMMgHBy_Y5_R6DC-vjzG",
      });
      navigate("/home");
      localStorage.setItem("userEmail", res.user.email);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
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
    <h1 className="heading">Make the most of your professional life</h1>
      <div className="auth-inputs">
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
          label="Your Name" 
          variant="standard" 
          onChange={(event) =>
            setCredentials({ ...credentails, name: event.target.value })
          } />
          </div>
          <div>
          <TextField 
          id="standard-basic" 
          label="Email or Phone Number" 
          variant="standard" 
          onChange={(event) =>
            setCredentials({ ...credentails, email: event.target.value })
          } />
          </div>
          <div>
            
          <TextField
            id="standard-password-input"
            label="Password (6 or more characters)"
            type="password"
            autoComplete="current-password"
            variant="standard"
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
          />
          
          </div> 
          <div>
          <Button variant="outlined" onClick={register} className="login-btn">Agree & Join</Button>
          </div>
          <hr class="hr-text" data-content="or" />
          <div className="google-btn-container">
            <p className="go-to-signup">
              Already on LinkedIn?{" "}
              <span className="join-now" onClick={() => navigate("/")}>
                Sign in
              </span>
            </p>
          </div>
          
        </Box>
      </div>
    </div>
    </div>
  );
}
