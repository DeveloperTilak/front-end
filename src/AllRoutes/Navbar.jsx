import {  Flex } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            
           
                <Flex justifyContent={"space-around"} bgColor={"blackAlpha.200"} p={"17px"} fontSize={"20px"}>
                    <Link to="/">SignUp</Link>
                    <Link to = "/login">Login</Link>
                    <Link to = "/blogs">Blogs</Link>
                </Flex>
             
        </div>
    );
}

export default Navbar;