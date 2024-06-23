import { useState } from "react";
import { Article } from "../../types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Flex,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  DeleteButton,
  CancelEditButton,
  SaveChangesButton,
  ToggleEditButton,
} from "../Buttons/Buttons";
import axios from "axios";
import { ErrorAlert } from "../Alerts/Alerts";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const ArticleListRow = ({
  article,
  handleRemoveArticle,
}: {
  article: Article;
  handleRemoveArticle: Function;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(article.title);
  const [summary, setSummary] = useState(article.summary);
  const [publisher, setPublisher] = useState(article.publisher);
  const [IsErrorAlert, setIsErrorAlertVisible] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const closeAlert = () => {
    setIsErrorAlertVisible(false);
  };

  const handleSaveChanges = async () => {
    if (title.length === 0 || summary.length === 0 || publisher.length === 0) {
      setIsErrorAlertVisible(true);
    } else {
      const updatedArticle = {
        id: article.id,
        title,
        summary,
        publisher,
      };
      axios
        .post(`${SERVER_URL}/articles/update`, updatedArticle)
        .then((res) => {
          console.log("article updated successfully!", res.data);
          setIsEditing(false);
        })
        .catch((err) =>
          console.error(`There was an error updating the article : ${err}`)
        );
    }
  };

  const handleCancelEdit = () => {
    setTitle(article.title);
    setSummary(article.summary);
    setPublisher(article.publisher);
    setIsEditing(false);
  };

  const handleDelete = () => {
    handleRemoveArticle(article.id, article.title);
  };

  return (
    <Card className="card" align="left" variant="filled" boxShadow="xl">
      {IsErrorAlert ? <ErrorAlert onClick={closeAlert} /> : <></>}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        ml={5}
        mt={5}
        mr={5}
      >
        <Text pt="2" fontSize="sm">
          <Heading size="xs">{article.date}</Heading>
        </Text>
        <ButtonGroup>
          {isEditing ? (
            <ButtonGroup>
              <SaveChangesButton onClick={handleSaveChanges} />
              <CancelEditButton onClick={handleCancelEdit} />
            </ButtonGroup>
          ) : (
            <ToggleEditButton onClick={handleToggleEdit} />
          )}
          <DeleteButton onClick={handleDelete} />
        </ButtonGroup>
      </Flex>

      <Stack divider={<StackDivider />} spacing="4">
        <CardHeader>
          <Heading size="lg">
            <Editable
              defaultValue={title}
              value={title}
              isDisabled={!isEditing}
              onChange={(newValue) => setTitle(newValue)}
              placeholder="Title"
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Heading>
        </CardHeader>
        <CardBody>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Summary
            </Heading>
            <Text pt="2" fontSize="sm">
              <Editable
                defaultValue={summary}
                value={summary}
                isDisabled={!isEditing}
                onChange={(newValue) => setSummary(newValue)}
                placeholder="Summary"
              >
                <EditablePreview />
                <EditableTextarea />
              </Editable>
            </Text>
          </Box>
        </CardBody>
      </Stack>

      <CardFooter>
        <Box>
          <Heading size="xs" textTransform="uppercase">
            Publisher
          </Heading>
          <Text pt="2" fontSize="sm">
            <Editable
              defaultValue={publisher}
              value={publisher}
              isDisabled={!isEditing}
              onChange={(newValue) => setPublisher(newValue)}
              placeholder="Publisher"
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Text>
        </Box>
      </CardFooter>
    </Card>
  );
};
