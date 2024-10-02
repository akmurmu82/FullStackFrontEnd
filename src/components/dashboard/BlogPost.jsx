import PropTypes from "prop-types";
import {
  Image,
  Text,
  Heading,
  VStack,
  Tag,
  HStack,
  Spacer,
  Flex,
} from "@chakra-ui/react";

export default function BlogPostCard({
  image,
  author,
  date,
  title,
  content,
  tag,
}) {
  return (
    <Flex
      direction="column"
      maxW="sm"
      h="100%"
      borderWidth="1px"
      borderRadius="sm"
      overflow="hidden"
    >
      <Image src={image} alt={title} />

      <VStack align="start" p={4} spacing={2} flex={1}>
        <Text fontSize="sm" color="gray.500">
          {date}
        </Text>

        <Heading as="h3" size="md">
          {title}
        </Heading>

        <Text fontSize="sm" color="gray.600" flex={1}>
          {content}
        </Text>
      </VStack>

      <HStack
        borderTop="1px solid"
        borderColor="gray.200"
        alignItems="center"
        w="full"
        p={2}
        mt="auto"
      >
        <Tag size="sm" colorScheme="blue">
          {tag}
        </Tag>
        <Spacer />
        <Text fontSize="sm" color="gray.500">
          {author}
        </Text>
      </HStack>
    </Flex>
  );
}

BlogPostCard.propTypes = {
  image: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  tag: PropTypes.string,
};
