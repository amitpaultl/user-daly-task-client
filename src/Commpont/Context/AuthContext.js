import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect, GithubAuthProvider, updateProfile, onAuthStateChanged, signOut, sendEmailVerification, sendPasswordResetEmail, updatePassword, updateEmail } from "firebase/auth";
import app from '../Firebase/Firebase.config'
export const AuthProvider = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
     
    

        // const creanuser
        const [user, setuser] = useState();
    
        // lodar 
        const [loder, setLoader] = useState(true)
    
        // google provider
        const googleprovider = new GoogleAuthProvider();
    
        // github provider
        const githubprovider = new GithubAuthProvider();
    
        // email sing up
        const emailsingup = (email,password)=>{
            setLoader(true)
            return createUserWithEmailAndPassword(auth, email, password)
        }
        // email login
        const singinemail = (email,password)=>{
            setLoader(true)
            return signInWithEmailAndPassword(auth, email, password)
        }
    
        // google sing up
        const googleSingup =()=>{
            setLoader(true)
            return signInWithPopup(auth, googleprovider)
        }
    
        // google login
    
        const googlelogin =()=>{
            setLoader(true)
            return signInWithRedirect(auth, googleprovider);
        }
    
        // githum sing up
        const gitgubSingUp =()=>{
            setLoader(true)
            return signInWithPopup(auth, githubprovider)
        }
    
        // githum login
        const githubLogin =()=>{
            setLoader(true)
            return signInWithRedirect(auth, githubprovider);
        }
    
        // profile up date
        const profile =(name, url)=>{
            return updateProfile(auth.currentUser, { displayName: name, photoURL: url})
        }
    
        // email sendEmailVerification 
        const emailVerification =()=>{
            return sendEmailVerification(auth.currentUser)
        }
    
        // updatePassword 
        const forgetpassword =(email)=>{
            return sendPasswordResetEmail(auth, email)
        }
    
        // updatePassword
        const newpasswordUpdat = (newPassword)=>{
            return updatePassword(user, newPassword)
        }
        // update email
        const newemailupdate = (newPassword)=>{
            return updateEmail(auth.currentUser, newPassword)
        }
    
        // log out
        const logOut =()=>{
            setLoader(true)
             signOut(auth)
        }
    
        // currentUser
        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, (crentuser) => {
                if (crentuser) {
                    if(crentuser.emailVerified || crentuser === null ){
                        setuser(crentuser)
                    }
                    
                }
                setLoader(false)
              });
    
              return () =>{
                unsubscribe();
              }
        },[])
    
        // context pass
    
        const authinfo = {emailsingup,singinemail,googleSingup,googlelogin,gitgubSingUp,githubLogin,profile,user,logOut,loder,emailVerification,setLoader,forgetpassword,newpasswordUpdat,newemailupdate}
        
    return (
        <div>
            <AuthProvider.Provider value={authinfo} >
                {children}
            </AuthProvider.Provider>
        </div>
    );
};

export default AuthContext;