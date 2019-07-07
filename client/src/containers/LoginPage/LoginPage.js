import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
http://localhost:8080;
 
 
const responseGoogle = (response) => {
  console.log(response);
}
 
ReactDOM.render(
  <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com241827298425-214lin8vtu0unf3b3qeda2017v2vl75n.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
  document.getElementById('googleButton')
);


