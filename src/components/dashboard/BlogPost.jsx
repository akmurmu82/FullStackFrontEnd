import { Box, Text, Tag, Avatar, HStack, Heading } from "@chakra-ui/react";

function ArticleCard() {
  return (
    <Box
      w="full"
      h="400px"
      backgroundImage="url('https://via.placeholder.com/800x400')"
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      p={6}
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
    >
      {/* Category Tag */}
      <Tag size="md" colorScheme="blue" mb={4} w={"fit-content"}>
        Music
      </Tag>

      {/* Title */}
      <Heading as="h3" size="md" mb={4}>
        What Your Music Preference Says About You and Your Personality.
      </Heading>

      {/* Author and Date */}
      <HStack spacing={4} w={"fit-content"} fontSize={'small'}>
        <Avatar size="sm" name="John Doe" src="https://bit.ly/ryan-florence" />
        <Text>John Doe</Text>
        <Text>•</Text>
        <Text>December 29, 2017</Text>
      </HStack>
    </Box>
  );
}

export default ArticleCard;
