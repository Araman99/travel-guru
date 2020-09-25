import React, { useContext, useState } from 'react';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { Form } from 'react-bootstrap';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
import fb from '../../Image/Icon/fb.png';
import google from '../../Image/Icon/google.png'

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    diplayName: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [info,setInfo,loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }
     const formStyle= {
         width: '35%',
         padding: '20px',
         margin: '50px auto',
         border: '1px solid black',
         borderRadius: '4px',
         textAlign: 'center',
        }
    const socialLinkStyle = {
        display: 'flex',
         width: '25%',
         height: '50px',
         padding: '6px 0 6px 8px',
         margin: '50px auto',
         border: '1px solid black',
         borderRadius: '25px',
         cursor: 'pointer'
    }
    return (
        <div>
            <Header filters='invert(1)'/>
                <Form style={formStyle} onSubmit={handleSubmit}>
                {newUser && <input name="name" type="text" className= "form-control" onBlur={handleBlur} placeholder="First Name"/>}
                <br/>
                {newUser && <input name="name" type="text" className= "form-control"onBlur={handleBlur} placeholder="Last Name"/>}
                <br/>
                <input type="text" name="email"className= "form-control" onBlur={handleBlur} placeholder="Your Email address" required/>
                <br/>
                <input type="password" name="password" className= "form-control" onBlur={handleBlur} placeholder="Your Password" required/>
                <br/>
                {newUser && <input name="cPassword" type="password" className= "form-control"onBlur={handleBlur} placeholder="Confirm Password"/>}
                <br/>
                
                {  
                 newUser?
                    <div>
                        <button className='form-control' style={{background: '#F9A51A'}}>Create an Account</button>
                        <p onClick={() => setNewUser(!newUser)}>Already have an account? <span style={{color: '#F9A51A', textDecoration: 'underline',cursor: 'pointer'}}>Login</span></p>
                        
                    </div>
                    
                    :
                    <div>
                       <div className='float-left pl-4'>
                       <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                       <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                       </div>
                       <p className='float-right' style={{color: '#F9A51A', textDecoration: 'underline',cursor: 'pointer'}}>Forget Password </p>
                       <br/><br/>
                      <input type="submit" style={{background: '#F9A51A'}} className= "form-control" value='Login'/>
                      <br/>
                      <p>Don't have an account? <span onClick={() => setNewUser(!newUser)}
                      style={{color: '#F9A51A', textDecoration: 'underline',cursor: 'pointer'}}
                      >Create an account</span></p>
                    </div>
                    
                  }

                <p style={{color: 'red'}}>{user.error}</p>
                { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>
                
                }
            </Form>
            <div style={socialLinkStyle}>
            <img src={fb} style={{ width: '25px'}} alt=""/>
            <h6 onClick={fbSignIn} style={{margin: '8px 0 0 80px'}} >Contiue with Facebook</h6>
            </div>
            <div style={socialLinkStyle}>
            <img src={google} style={{ width: '20px'}} alt=""/>
            <h6 onClick={googleSignIn} style={{margin: '8px 0 0 80px'}} >Contiue with Google</h6>
            </div>
        </div>
    );
};

export default Login;