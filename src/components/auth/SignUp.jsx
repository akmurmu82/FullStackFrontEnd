import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const backendApi = import.meta.env.VITE_BACKEND_API;

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const toast = useToast();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      let res = await axios.post(`${backendApi}/user/register`, formData);
      console.log(res);
      if (res.status == 201) {
        toast({
          title: "Registration Successful.",
          description: "You can now Login to your account.",
          position: "top",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/auth/login");
      } else {
        console.log(res.message);
      }
    } catch (error) {
      console.log(error);
      if (error.status == 409) {
        toast({
          title: error.response.statusText,
          description: error.response.data.message,
          position: "top",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box
      m={"auto"}
      mt={20}
      p={5}
      px={{ base: 3, md: 10 }}
      w={{ base: "100%", md: "60%", lg: "50%" }}
    >
      <Heading>SignUp</Heading>
      <FormControl mt={5}>
        <FormLabel>Name</FormLabel>
        <Input
          value={formData.name}
          name="name"
          type="name"
          placeholder="Enter your name..."
          onChange={handleOnChange}
        />
      </FormControl>
      <FormControl mt={5}>
        <FormLabel>Email</FormLabel>
        <Input
          value={formData.email}
          name="email"
          type="email"
          placeholder="Enter your email..."
          onChange={handleOnChange}
        />
      </FormControl>
      <FormControl mt={5}>
        <FormLabel>Password</FormLabel>
        <Input
          value={formData.password}
          name="password"
          type="password"
          placeholder="Enter your password..."
          onChange={handleOnChange}
        />
      </FormControl>
      <Button colorScheme="blue" mt={5} onClick={handleSignUp}>
        SignUp
      </Button>
    </Box>
  );
}

SignUp.propTypes = {
  props: PropTypes.any,
};

export default SignUp;
