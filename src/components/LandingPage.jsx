import { Box, Flex } from "@chakra-ui/react";
import PropTypes from "prop-types";

function LandingPage() {
  return (
    <Box>
      <Flex>Blogify your thoughts...</Flex>
    </Box>
  );
}

LandingPage.propTypes = {
  props: PropTypes.any,
};

export default LandingPage;
