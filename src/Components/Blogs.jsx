import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Blogs(props) {

    const [blog, setBlog] = useState([])
    const [loading, setLoading]  = useState(true)

    useEffect(()=>{


        const token = localStorage.getItem("token")
        console.log(token)

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        try {
            
            axios.get(`https://courageous-puce-bass.cyclic.app/blog`, config).then((res)=>{
                console.log(res)
                setBlog(res.data.blog)
                setLoading(false)
                // console.log(res.data.blog)
            })
        } catch (error) {
            console.log("An Error Occurred while fetching data: ", error)

            
        }


    },[])

    if(loading){
        return (
            <Center>
                <Text>Loading...</Text>
            </Center>
        )
    }
    return (
        <div>
            <Center>
                
                <Heading>This is blog</Heading>


            </Center>


            <Box>
                <Flex mt={"2rem"} justifyContent={"center"} align={"center"}>

                    {
                        blog.length>0 ? (
                            blog.map((element, index)=>{
                                return(
                                    <Box key={index} w={"165px"} height={"100px"}>
                                        <Heading fontSize={"15px"}>{element.title}</Heading>
                                        <Text>{element.description}</Text>
                                        </Box>
                                )
                            })
                        ): <Text> there is no blog </Text>
                    }
                </Flex>

            </Box>
        </div>
    );
}

export default Blogs;