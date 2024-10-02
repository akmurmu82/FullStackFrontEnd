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

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const toast = useToast();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      let res = await axios.post(`${backendApi}/user/login`, formData);
      console.log(res);
      if (res.status == 200) {
        const token = res.data.token;
        localStorage.setItem("authToken", JSON.stringify(token));
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.status == 404) {
        console.log(error.response.data.message);
        toast({
          title: "404 Not Found",
          description: error.response.data.message,
          position: "top",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      if (error.status == 409) {
        console.log(error.response.data.message);
        toast({
          title: error.statusText,
          description: error.response.data.message,
          position: "top",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.log(error);
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
      <Heading>Login</Heading>
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
      <Button colorScheme="blue" mt={5} onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
}

Login.propTypes = {
  props: PropTypes.any,
};

export default Login;
