import { Box, Divider, Flex, Heading, Link } from "@chakra-ui/react";
import PropTypes from "prop-types";

function Navbar() {
  const MenuItem = ({ title, path }) => {
    return (
      <Link
        href={path}
        transition={"all 0.5s"}
        px={4}
        py={2}
        color={"#b7cbd4"}
        _hover={{ color: "#fff" }}
      >
        {title}
      </Link>
    );
  };

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "My Blogs", path: "/blogs" },
    { title: "Login", path: "/auth/login" },
    { title: "Sign Up", path: "/auth/signup" },
    { title: "About", path: "/#about" },
    { title: "Contact", path: "/#contact" },
  ];
  return (
    <Box p={4}>
      <Heading
        textAlign={"center"}
        mb={2}
        fontSize={{ base: "2xl", md: "5xl" }}
      >
        PHILOSOPHY
      </Heading>
      <Divider />
      <Flex
        justifyContent={"space-around"}
        w={{ lg: "45%", base: "80%" }}
        m={"auto"}
      >
        {menuItems.map(({ title, path }) => (
          <MenuItem key={title} title={title} path={path} />
        ))}
      </Flex>
    </Box>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
};

export default Navbar;
