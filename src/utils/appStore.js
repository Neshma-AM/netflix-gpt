import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { addUser, removeUser } from "./userSlice";


const appStore = configureStore({
    reducer: {
      user:  userReducer
    }
});



export default appStore;


