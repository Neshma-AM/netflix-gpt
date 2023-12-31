import React, { useEffect } from 'react';
import { auth } from '../utils/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG, SUPPORTED_LANGS } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';
const Header = () => {

  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const dispatch = useDispatch();
 const showGptSearch =  useSelector(store => store.gpt.showGptSearch)
  const handleSignOutBtn = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.

      navigate("/error")
    });
    }

const handleGptSearchClick = () => {
  dispatch(toggleGptSearchView())
}

    useEffect( () => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName, photoURL} = user;
      dispatch(addUser({
        uid: uid, 
        email: email,
        displayName: displayName,
        photoURL: photoURL
      })
      );
      navigate("/browse")
    } else {
      // User is signed out
      dispatch(removeUser())
      navigate("/")
    }
  })
  //unsubscribe when component unmounts - when "Header" component will unmount, this below function will be called and "onAuthStateChange" will be removed from place where it was registered (webapi) in browser 
  return () => unsubscribe() 
}
  , []);

  const handleLanguageChange = (event) => {
    console.log(event)
       dispatch(changeLanguage(event.target.value));
  }
    return ( 
        <div className='absolute bg-gradient-to-b from-black px-8 py-2 z-10 w-screen flex justify-between'>
      <img className='w-44' src= {LOGO}
      alt='logo' />
     { user && <div className='flex p-2'>
    {showGptSearch && <select className='bg-gray-900 p-2 m-2 text-white rounded-lg' onChange={handleLanguageChange}>
        {SUPPORTED_LANGS.map((lang) =>  <option value= {lang.identifier}>{lang.name}</option>)}
        </select>}
      <button className='py-2 px-4 bg-purple-800 rounded-lg mx-4 my-2' onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
        <img
        className='w-12 h-12' 
        src={user.photoURL}
        alt='usericon'
        />
        <button className='text-white font-bold' onClick={handleSignOutBtn}>(Sign out)</button>
      </div>}
        </div>
    )
}

export default Header;