import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth =getAuth(app);


const user={email:'abc'};
const AuthInfo={user};

const UserContext = ({children}) => {
    return (
        <AuthContext.Provider value={AuthInfo}>
        {children}
            
        </AuthContext.Provider>
    );
};

export default UserContext;