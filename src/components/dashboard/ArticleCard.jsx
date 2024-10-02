import { Box, Text, Tag, Avatar, HStack, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

function ArticleCard({ image, title, tag, author, date }) {
  return (
    <Box
      h="full"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      p={6}
      w={"100%"}
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      color="white"
      boxShadow={"md"}
    >
      {/* Tag */}
      <Tag size="md" colorScheme="blue" mb={2} w={"fit-content"}>
        {tag}
      </Tag>

      {/* Title */}
      <Heading as="h3" size="md" mb={4}>
        {title}
      </Heading>

      {/* Author and Date */}
      <HStack spacing={4}>
        <Avatar size="sm" name={author} src="https://bit.ly/ryan-florence" />
        <Text>{author}</Text>
        <Text>•</Text>
        <Text>{date}</Text>
      </HStack>
    </Box>
  );
}

export default ArticleCard;

ArticleCard.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  tag: PropTypes.string,
};
