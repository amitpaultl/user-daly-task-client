import React from 'react';
import './Signup.css'
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import './Signup.css'
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex">


                    <div className="w-1/2 mx-2">
                        <div className="input-box">
                            <h2>logo</h2>
                            <p>Sign Into Your Account</p>
                            <form >

                                <input type="text" className='inputFile w-full' name='name' placeholder='Name' />
                                <input type="text" className='inputFile w-full' name='email' placeholder='Email' />
                                <input type="password" className='inputFile w-full' name='password' placeholder='password' />
                                <input type="file" name="img" id="" />

                                <button type='submit' className='bt-submit'>Submit</button>
                            </form>
                            <div className="account">
                                <p>Don't have an account? <Link to={'/login'}>Login here</Link></p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="w-1/2 mx-2">
                        <div className="input-text">

                            <h2>WELCOME TO AMIT</h2>
                            <p>Dummy text of the printing and typesetting industry.  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p>
                            <div className="social">
                                <div>
                                    <FcGoogle></FcGoogle>
                                </div>
                                <div>
                                    <BsGithub></BsGithub>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;