import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errormsg,setErrormsg]=useState(null)
  const navigate=useNavigate();
  const email=useRef(null);
  const password=useRef(null)

  const handleToggleSignForm = () => {
    setisSignInForm(!isSignInForm);
  };
  const handleButtonClick=()=>{
    const message=checkValidateData(email.current.value,password.current.value)
    // console.log(email.current.value)
    // console.log(password)
    // console.log(message)
    setErrormsg(message)
    if(message) return;
    if(!isSignInForm){
        // sign up logic
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormsg(errorCode+"-"+errorMessage)
    // ..
  });


    }
    else{
        // sign in logic
    
signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormsg(errorCode+"-"+errorMessage)
    console.log(error)
  });
    }

}

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_medium.jpg"
          alt="logo"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()}className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
       {
        !isSignInForm && (<input
        type="text"
        placeholder="Full Name"
        className="p-2 my-4 w-full bg-gray-700"
      />)
       } 
        <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errormsg}</p>
        <button className="p-4 my-6 bg-red-900 w-full rounded-lg" onClick={handleButtonClick}>
          
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleToggleSignForm}>
       
          {isSignInForm
            ? "New to Netflix ? Sign Up Now"
            : " Already a User ?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
