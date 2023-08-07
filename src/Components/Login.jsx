import { FormControl, FormLabel, Input , Button } from "@chakra-ui/react";
import axios from "axios";
 
import React, { useState } from "react";

const initialValues = {
  email: "",
  password: "",
};
function Login(props) {
  const [data, setData] = useState(initialValues);



  const handleChange  = (e)=>{
    setData({...data, [e.target.name]: e.target.value})

  }
  const handleSubmit = async(e) => {
    e.preventDefault();

    // console.log(data)

   try {

    const res = await  axios.post("https://courageous-puce-bass.cyclic.app/user/login", data)
    console.log(res)

    const token = res.data.token;
    console.log(token)
    localStorage.setItem("token", token)
    setData(initialValues)
    
   } catch (error) {
    console.log("An error occurred while submitting the form.")
    console.error("Error: ", error);
    
   }

  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <FormControl >
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          onChange={handleChange}
        />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </FormControl>
      </form>
    </div>
  );
}

export default Login;
