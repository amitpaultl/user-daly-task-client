import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../Assarts/image/logo.png'
import { Context } from '../../../Context/Contex';
import { FaUser, FaRegMoon, FaSun } from 'react-icons/fa';

const Header = () => {
    const {setTheme,theme}=useContext(Context)
    // const [color, setColor] = useState(true)
    const colorBlack = ()=>{
        setTheme(current => !current);
    }

    return (
        <div className="header-first">
            <div className="header">
                <div className="container mx-auto">
                    <div className="header-contect">
                        <div className="logo">
                            <Link to="#">

                                <img src={logo} alt=""/>
                            </Link>
                        </div>
                        <div className="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="main-menu ">
                            <ul className="nave-menu">
                                <li><Link to="/" className="active">Home</Link></li>
                                <li><Link to="/addTask">Add Task</Link></li>
                                <li><Link to="/myTask">My Task</Link></li>
                                <li><Link to="/completedTask">Completed Task</Link></li>
                                <li><Link to="#Contact">Contact</Link></li>
                                <li><Link to="signUp">Sign Up</Link></li>
                                <li><Link className='menu' onClick={colorBlack}>
                                {
                                    theme ? <FaRegMoon /> : <FaSun />
                                }
                            </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;