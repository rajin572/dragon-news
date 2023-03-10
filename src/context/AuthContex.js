import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import firebaseApp from '../firebase/firebase.config';

export const AuthProvider = createContext()
const auth = getAuth(firebaseApp)

const AuthContex = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleLogin = (provider) =>{
        setLoading(true)
       return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true)
       return signOut(auth)
    }
    const updateProfileUser = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }
    useEffect(() =>{
        const unsubscrice = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('inside auth state change', currentUser);
            setLoading(false)
        })
        return () =>{
            unsubscrice();
        }
    }, [])
    const AuthInfo = {user, googleLogin, logOut,createUser, userLogin, loading, updateProfileUser}
    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContex;