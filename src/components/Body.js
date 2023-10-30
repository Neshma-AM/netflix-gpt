import React, { useEffect } from 'react'
import Header from './Header'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { addUser, removeUser } from '../utils/userSlice'

const Body = () => {
const dispatch = useDispatch();
  const appRouter = createBrowserRouter(
    [
      {
        path: '/',
        element: <Login/>
      },
      {
        path: '/browse',
        element: <Browse/>
      }
    ]
  );

  return (
    
 <div>
  <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body