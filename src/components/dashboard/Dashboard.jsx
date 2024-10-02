import { Box, SimpleGrid } from "@chakra-ui/react";
import PropTypes from "prop-types";
import ArticleCard from "./ArticleCard";
import blogs from "../../assets/blogs.json";
import BlogPostCard from "./BlogPost";

function DashBoard() {
  const mainArticle = {
    image: "https://via.placeholder.com/800x400",
    title: "What Your Music Preference Says About You and Your Personality.",
    category: "Music",
    author: "John Doe",
    date: "December 29, 2017",
  };

  const sideArticles = [
    {
      image: "https://via.placeholder.com/400x200",
      title: "The Pomodoro Technique Really Works.",
      category: "Management",
      author: "John Doe",
      date: "December 27, 2017",
    },
    {
      image: "https://via.placeholder.com/400x200",
      title: "Throwback To The Good Old Days.",
      category: "Lifestyle",
      author: "John Doe",
      date: "December 21, 2017",
    },
  ];
  return (
    <Box w={"full"}>
      <SimpleGrid columns={{ base: 1, lg: 6 }} spacing={1} mb={5} m={10}>
        {/* Main Article */}
        <Box gridColumn={{ lg: "span 4" }}>
          <ArticleCard
            image={mainArticle.image}
            title={mainArticle.title}
            category={mainArticle.category}
            author={mainArticle.author}
            date={mainArticle.date}
          />
        </Box>

        {/* Side Articles (Stacked) */}
        <Box gridColumn={{ lg: "span 2" }}>
          <SimpleGrid columns={1} spacing={1}>
            {sideArticles.map((article, ind) => (
              <ArticleCard
                key={ind}
                image={article.image}
                title={article.title}
                category={article.category}
                author={article.author}
                date={article.date}
              />
            ))}
          </SimpleGrid>
        </Box>
      </SimpleGrid>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        p={10}
        spacing={5}
        bg={"#f6f6f6"}
      >
        {blogs.map((article, ind) => (
          // <ArticleCard
          //   key={ind}
          //   image={article.image}
          //   title={article.title}
          //   category={article.category}
          //   author={article.author}
          //   date={article.date}
          // />
          <BlogPostCard
            key={ind}
            image={article.image}
            title={article.title}
            tag={article.category}
            author={article.author}
            date={article.date}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

DashBoard.propTypes = {
  props: PropTypes.any,
};

export default DashBoard;
