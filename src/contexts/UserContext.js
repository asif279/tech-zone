import React, { createContext } from 'react';

const AuthContext = createContext()

const UserContext = () => {
    return (
        <AuthContext.Provider>
            
        </AuthContext.Provider>
    );
};

export default UserContext;