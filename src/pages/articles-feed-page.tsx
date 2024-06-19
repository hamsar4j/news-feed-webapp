import React from "react";
import { Container } from "@chakra-ui/react";
import { ArticlesFeed } from "../components/Feed/ArticleFeed";

export const FeedPage = () => {
  return (
    <Container maxW="6xl" p={10}>
      <ArticlesFeed />
    </Container>
  );
};
