import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import ArticleCard from "./BlogPost";

function DashBoard() {
  const blogs = [1, 2, 3, 4];
  return (
    <Box>
      <Heading>DashBoard</Heading>
      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={2}>
        {blogs.map((blog, ind) => (
          <ArticleCard key={ind} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

DashBoard.propTypes = {
  props: PropTypes.any,
};

export default DashBoard;
