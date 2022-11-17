import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../redux/';
import Grid from '@mui/material/Grid';
import PersonIcon from '@mui/icons-material/Person';

export default function Login() {

  const dispatch = useDispatch();
  const { isloggedin } = bindActionCreators(actionCreators, dispatch);

  const handleLogin = () => {
    isloggedin(true)
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
      <Grid item xs={12} className="logingrid">
        <div className="loginpagemaindiv">
          <h1 className="loginheading">Sign In</h1>
          <form className="loginform">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PersonIcon style={{ fontSize: "50px", color: "#CBCBCB" }} />
              <input type="text" placeholder="Login Name" className="loginuser" />
            </div>
            <input type="password" placeholder="Enter Password" className="loginpassword" />
          </form>
          <div className="loginpagebuttons">
            <button className="logincancel">Cancel</button>
            <Link to="/"><button className="loginbutton" onClick={handleLogin}>Login</button></Link>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

/*<div className="loginformmaindiv">
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <h1 className="active">Login</h1>
          <div className="loginformdiv">
            <input type="text" id="login" className="logininput" name="login" placeholder="User Name" />
            <input type="text" id="password" className="logininput" name="login" placeholder="Password" />
            <Link to="/"><input type="submit" className="loginbutton" value="Log In" onClick={handleLogin} /></Link>
          </div>
          <div id="formFooter">
            <span className="underlineHover">Forgot Password?</span>
          </div>
        </div>
      </div>
    </div>*/