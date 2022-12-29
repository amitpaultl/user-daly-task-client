import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { BsGithub } from "react-icons/bs";

import './Signup.css'
import { AuthProvider } from '../../Context/AuthContext';
import { toast, Toaster } from 'react-hot-toast';
const Login = () => {
    const {singinemail,googlelogin,githubLogin}=useContext(AuthProvider)

    // email login 
    const submitHandale =(e)=>{
        e.preventDefault()
        
        const email = e.target.email.value;
        const password = e.target.password.value;
        singinemail(email,password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully signup')

        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
        })
        // console.log(email,password);
    }

    // google login
    const googleHandale =()=>{
        googlelogin()
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully signup')

        })
        .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage)
        })
    }

    // github login
    const gitHubHandale =()=>{
        githubLogin()
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully signup')

        })
        .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            
        })
    }
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex">


                    <div className="w-1/2 mx-2">
                        <div className="input-box">
                            <h2>logo</h2>
                            <p>Login Into Your Account</p>
                            <form onSubmit={submitHandale}>

                                <input type="text" className='inputFile w-full' name='email' placeholder='Email' />
                                <input type="password" className='inputFile w-full' name='password' placeholder='password' />
                               
                                <button type='submit' className='bt-submit'>Submit</button>

                            </form>
                            <div className="forget-password">
                            <p> <Link to={'/forget'}>Forget PassWord</Link></p>
                            </div>
                            <div className="account">
                                <p>Don't have an account? <Link to={'/signUp'}>Sign UP here</Link></p>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/2 mx-2">
                        <div className="input-text">

                            <h2>WELCOME TO AMIT</h2>
                            <p>Dummy text of the printing and typesetting industry.  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p>
                            <div className="social">
                                <div>
                                    <button onClick={googleHandale}><FcGoogle></FcGoogle></button>
                                </div>
                                <div>
                                    <button onClick={gitHubHandale}><BsGithub></BsGithub></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />

        </div>
    );
};

export default Login;