import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {
  const handleSignIn = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Unichat</h2>
        <div className="login-button google" onClick={handleSignIn}>
          <GoogleOutlined /> Sign In With Google
        </div>
      </div>
    </div>
  );
};

export default Login;
