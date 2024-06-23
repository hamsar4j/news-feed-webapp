import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleList } from "./ArticleList";
import { useNavigate } from "react-router-dom";
import {
  Box,
  useColorMode,
  IconButton,
  Heading,
  Flex,
  ButtonGroup,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { RefreshButton, AddButton } from "../Buttons/Buttons";
import { Article } from "../../types";
import { LoadingIcon } from "../Icons/LoadingIcon";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const ArticlesFeed = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();

  const navigate = useNavigate();

  const goToForm = () => {
    navigate("/form");
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // get all articles
  const fetchArticles = async () => {
    axios
      .get(`${SERVER_URL}/articles/all`)
      .then((res) => {
        setArticles(res.data);
        setLoading(false);
      })
      .catch((err) =>
        console.error(`There was an error retrieving the article list: ${err}`)
      );
  };

  // handle remove article
  const handleRemoveArticle = (id: number, title: string) => {
    axios
      .put(`${SERVER_URL}/articles/delete`, { id: id })
      .then(() => {
        console.log(`Article ${title} removed.`);
        fetchArticles();
      })
      .catch((err) =>
        console.error(
          `There was an error removing the ${title} article: ${err}`
        )
      );
  };

  const refreshPage = () => {
    window.location.reload();
  };

  if (loading) return <LoadingIcon />;

  return (
    <>
      <Box mb={10}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading bgGradient="linear(to-r, blue.300, blue.600)" bgClip="text">
            News Feed
          </Heading>
          <ButtonGroup alignItems="center">
            <Stat pr="1rem">
              <StatLabel>Articles Count</StatLabel>
              <StatNumber>{articles.length}</StatNumber>
            </Stat>
            <IconButton
              aria-label="toggle color mode"
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              isRound={true}
              onClick={toggleColorMode}
            />
            <RefreshButton onClick={refreshPage} />
          </ButtonGroup>
        </Flex>
      </Box>
      <ArticleList
        loading={loading}
        articles={articles}
        handleRemoveArticle={handleRemoveArticle}
      />
      <Box display="flex" justifyContent="center" mt={10}>
        <AddButton onClick={goToForm} />
      </Box>
    </>
  );
};
