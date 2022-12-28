import React from 'react';
import { Link } from 'react-router-dom';

const Forget = () => {
    return (
        <div>
            <div className="container mx-auto">
                <div className="flex">


                    <div className="w-1/2 mx-2">
                        <div className="input-box">
                            <h2>logo</h2>
                            <p>Forget Password</p>
                            <form >

                                <input type="text" className='inputFile w-full' name='email' placeholder='Email' />
                                
                                <button type='submit' className='bt-submit'>Submit</button>

                            </form>
                            

                        </div>
                    </div>
                    <div className="w-1/2 mx-2">
                        <div className="input-text">

                            <h2>WELCOME TO AMIT</h2>
                            <p>Dummy text of the printing and typesetting industry.  has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of</p>
                            <div className="social">
                                
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forget;