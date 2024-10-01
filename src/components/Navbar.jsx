import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

function Navbar() {
  const MenuItem = ({ title, path }) => {
    return (
      <Link
        href={path}
        px={4}
        py={2}
        _hover={{ bg: "gray.100", borderRadius: "md" }}
      >
        {title}
      </Link>
    );
  };

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Blogs", path: "/blogs" },
    { title: "About", path: "/#about" },
    { title: "Contact", path: "/#contact" },
  ];
  return (
    <Box position={"fixed"} w={"100%"} p={4} bg={"pink"}>
      <Flex alignItems={"center"}>
        <Text>Logo</Text>
        <Spacer />
        {menuItems.map(({ title, path }) => (
          <MenuItem key={title} title={title} path={path} />
        ))}
      </Flex>
    </Box>
  );
}

Navbar.propTypes = {
  props: PropTypes.any,
};

export default Navbar;
