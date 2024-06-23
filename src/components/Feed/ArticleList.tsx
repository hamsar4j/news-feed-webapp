import { ArticleListRow } from "./ArticleListRow";
import { Article } from "../../types";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Card, CardBody, SimpleGrid } from "@chakra-ui/react";

export const ArticleList = ({
  articles,
  handleRemoveArticle,
}: {
  loading: boolean;
  articles: Article[];
  handleRemoveArticle: Function;
}) => {
  return (
    <SimpleGrid spacing={4} columns={1}>
      {articles.length > 0 ? (
        articles.map((article: Article) => (
          <ArticleListRow
            key={article.id}
            article={article}
            handleRemoveArticle={handleRemoveArticle}
          />
        ))
      ) : (
        <Card variant="filled">
          <CardBody style={{ textAlign: "center" }}>
            There are no articles to be shown.
            <br />
            <ChakraLink as={ReactRouterLink} color="blue.500" to="/form">
              Create one now!
            </ChakraLink>
          </CardBody>
        </Card>
      )}
    </SimpleGrid>
  );
};
