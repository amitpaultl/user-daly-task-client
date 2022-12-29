import React, { useContext, useState } from 'react';
import './Signup.css'
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import { toast, Toaster } from 'react-hot-toast';
const Signup = () => {
    const { emailsingup, googleSingup, profile,gitgubSingUp } = useContext(AuthProvider)
    const [imageurl, setImage] = useState()
    const navigate = useNavigate();
    console.log(imageurl);
    const handalefrom = (e) => {
        e.preventDefault()

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const image = e.target.img.files[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=9b886ea0069808da69e30cf31f29ca72`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // setImage(data.data.display_url)
                if (data.success) {
                    // email signup
                    emailsingup(email, password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            profile(name, data.data.display_url)
                                .then(() => {
                                    console.log(user);
                                    toast.success('Successfully signup')
                                    navigate('/')
                                }).catch((error) => {
                                    // An error occurred
                                    // ...
                                    const errorMessage = error.message;
                                    toast.error(errorMessage)
                                });

                            // ...
                        })
                        .catch((error) => {
                            const errorMessage = error.message;
                            toast.error(errorMessage)
                            // ..
                        });
                }
            })




    }

    // google signup

    const googleHandle = () => {
        googleSingup()
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                toast.success('Successfully signup')
                navigate('/')
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                // ...
            });
    }

    // git hub 
    const githubHandale = ()=>{
        gitgubSingUp()
        .then((result) => {
            const user = result.user;
            console.log(user);
            toast.success('Successfully signup')
            navigate('/')

            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            toast.error(errorMessage)
            
            // ...
          });
    }

    return (
        <div>
            <div className="container mx-auto">
                <div className="flex">


                    <div className="w-1/2 mx-2">
                        <div className="input-box">
                            <h2>logo</h2>
                            <p>Sign Into Your Account</p>
                            <form onSubmit={handalefrom}>

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
                                    <button onClick={googleHandle}><FcGoogle></FcGoogle></button>

                                </div>
                                <div>
                                    <BsGithub onClick={githubHandale}></BsGithub>
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

export default Signup;