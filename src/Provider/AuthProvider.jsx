import React, { createContext, useEffect, useState } from 'react';
import Auth from '../Layouts/Auth';
import app from '../firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
// import { AuthContext } from './AuthContext';
export const AuthContext = createContext();


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);
    // console.log(user, loading);

    // sign in user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // observer state changes 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    // update user profile 
    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData);
    }

    const userInfo = {
        user,
        loading,
        setUser,
        createUser,
        signInUser,
        signOutUser,
        setLoading,
        updateUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;