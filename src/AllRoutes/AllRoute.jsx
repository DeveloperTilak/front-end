import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from '../Components/SignUp';
import Login from '../Components/Login';
import Blogs from '../Components/Blogs';

function AllRoute(props) {
    return (
        <div>
            <Routes>
                <Route  path='/' element = {<SignUp />} />
                <Route  path='/login' element = {<Login />} />
                <Route  path='/blogs' element = {<Blogs />} />
            </Routes>
        </div>
    );
}

export default AllRoute;