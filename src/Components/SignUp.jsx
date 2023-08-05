import React, { useState } from "react";
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function SignUp(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [res, setRes] = useState("")

  const initialValues = {
    name: "",
    email: "",
    password: "",
    age: "",
    ph_number: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    age: Yup.number()
      .typeError("Age must be a number")
      .required("Age is required")
      .positive("Age must be a positive number"),
    ph_number: Yup.number()
      .typeError("Phone number must be a number")
      .required("Phone number is required")
      .positive("Phone number must be a positive number"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      // Replace 'YOUR_API_ENDPOINT' with your backend API endpoint for handling form submission
      const response = await axios.post("https://courageous-puce-bass.cyclic.app/user/signup", values);
      // Handle success response if needed
      console.log("Form submitted successfully:", response);
      setRes(response.data)
      resetForm();
    } catch (error) {
      setSubmitError("An error occurred while submitting the form.");
      // Handle error response if needed
      console.error("Error submitting form:", error);
    }
    setIsSubmitting(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Center>
        <Heading>This Is SignUp Form</Heading>
      </Center>
      <Box w={"40%"} margin={"auto"}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={formik.errors.name && formik.touched.name}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name && (
              <Text color="red">{formik.errors.name}</Text>
            )}
          </FormControl>

          <FormControl
            mt={4}
            isInvalid={formik.errors.email && formik.touched.email}
          >
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email && (
              <Text color="red">{formik.errors.email}</Text>
            )}
          </FormControl>

          <FormControl
            mt={4}
            isInvalid={formik.errors.password && formik.touched.password}
          >
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password && (
              <Text color="red">{formik.errors.password}</Text>
            )}
          </FormControl>

          <FormControl mt={4} isInvalid={formik.errors.age && formik.touched.age}>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.age && formik.touched.age && (
              <Text color="red">{formik.errors.age}</Text>
            )}
          </FormControl>

          <FormControl
            mt={4}
            isInvalid={
              formik.errors.ph_number && formik.touched.ph_number
            }
          >
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="number"
              name="ph_number"
              value={formik.values.ph_number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.ph_number && formik.touched.ph_number && (
              <Text color="red">{formik.errors.ph_number}</Text>
            )}
          </FormControl>

          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Submit
          </Button>

          {submitError && (
            <Text mt={2} color="red">
              {submitError}
            </Text>
          )}
        </form>
        <Text>{res}</Text>
      </Box>
    </div>
  );
}

export default SignUp;
