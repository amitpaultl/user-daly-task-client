import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddTask from '../Page/AddTask/AddTask';
import CompletedTask from '../Page/CompletedTask/CompletedTask';
import Home from '../Page/Home/Home';
import Forget from '../Page/Login/Forget';
import Login from '../Page/Login/Login';
import Signup from '../Page/Login/Signup';
import MyTask from '../Page/MyTask/MyTask';
import Root from '../Root/Root';

const Route = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/signUp',
                element:<Signup></Signup>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/forget',
                element:<Forget></Forget>
            },
            {
                path:'/addTask',
                element:<AddTask></AddTask>
            },
            {
                path:'/myTask',
                element:<MyTask></MyTask>
            },
            {
                path:'/completedTask',
                element:<CompletedTask></CompletedTask>
            },
        ]
    }
]);

export default Route;