import React from 'react'
import Header from './Header'
import { useState, useRef } from 'react'
import { checkValidity } from '../utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {

const [isSignIn, setIsSignIn] = useState(true);
const [errorMessage, setErrorMessage] = useState("");
const dispatch = useDispatch();

const nameRef = useRef(null);
const emailRef = useRef(null);
const passwordRef = useRef(null)

const toggleSignInForm = () => {
  setIsSignIn(!isSignIn)
  }
  const handleButtonClick = (event) => {
    event.preventDefault();
    const getResponse = checkValidity(emailRef.current.value, passwordRef.current.value)
    setErrorMessage(getResponse);
    if(getResponse) return;

    if(!isSignIn) {
      //Sign up logic
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: nameRef.current.value, photoURL: USER_AVATAR
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL } = auth.currentUser
          dispatch(addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }))
  
        }).catch((error) => {
          // An error occurred
        setErrorMessage(error.message);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "" +errorMessage);
      });
    } else {
      //Sign in logic
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
   .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage("User not found");
  });
    }
  }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
            alt='logo'/>
        </div>
        <form className='absolute bg-black p-12 mx-auto my-36 right-0 left-0 w-4/12 h-200 text-white rounded bg-opacity-80'>
            <h1 className='font-bold text-3xl px-1 py-4 rounded'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
           {!isSignIn && <input type='text' placeholder='Username' className='py-4 px-5 my-4 w-full bg-gray-700 rounded'  ref={nameRef}/>}
            <input type='email' placeholder='Email or phone number' className='py-4 px-5 my-4 w-full bg-gray-700 rounded' ref={emailRef}/>
            <input type='password' placeholder='Password'className='py-4 px-5 my-4 w-full bg-gray-700 rounded' ref={passwordRef}/>
            {errorMessage.length > 0 && <p className='py-4 text-red-600 font-bold text-l'>{errorMessage}</p>}
            <button type='submit' className='p-4  my-6 bg-red-700 w-25 w-full rounded rounded' onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign up now." : "Already a user? Sign In."}</p>
        </form>
    </div>
  ) 
}

export default Login;