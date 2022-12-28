import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Share/Footer/Footer';
import Header from '../Page/Share/Header/Header';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;