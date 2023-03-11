import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth =getAuth(app);


//const user={email:'abc'};


const UserContext = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const SignIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

useEffect(()=>{

  const UnSubscribe= onAuthStateChanged(auth,currentUser=>{
    console.log("Hello Buddy User",currentUser);
    setUser(currentUser);
    setLoading(false)
  })

  return ()=> UnSubscribe();

},[])




    const AuthInfo={user,createUser,SignIn,logOut,loading};
    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
            
        </AuthContext.Provider>
    );
};

export default UserContext;