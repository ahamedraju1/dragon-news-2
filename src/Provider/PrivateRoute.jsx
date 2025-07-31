import React, { Children, use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({Children}) => {
    const {user} = use(AuthContext);
    console.log(user);

    if(user && user.email){
        return  Children;
    }
    return <Navigate to='/auth/login'></Navigate> 
    
};

export default PrivateRoute;