import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Container,
  Box,
} from "@chakra-ui/react";
import { ErrorAlert, SuccessAlert } from "../Alerts/Alerts";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const ArticleForm = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [date, setDate] = useState("");
  const [publisher, setPublisher] = useState("");
  const [IsSuccessAlert, setIsSuccessAlertVisible] = useState(false);
  const [IsErrorAlert, setIsErrorAlertVisible] = useState(false);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  // reset all input fields
  const handleResetInputs = () => {
    setIsErrorAlertVisible(false);
    setTitle("");
    setSummary("");
    setDate("");
    setPublisher("");
  };

  // create new article
  const handleCreateArticle = () => {
    axios
      .post(`${SERVER_URL}/articles/create`, {
        title: title,
        summary: summary,
        date: date,
        publisher: publisher,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) =>
        console.error(
          `There was an error creating the ${title} article: ${err}`
        )
      );
  };

  const closeErrorAlert = () => {
    setIsErrorAlertVisible(false);
  };

  const closeSuccessAlert = () => {
    setIsSuccessAlertVisible(false);
  };

  // submit new article
  const handleSubmitArticle = () => {
    let validTitle = title.length > 0;
    let validSummary = summary.length > 0;
    let validDate = date.length > 0;
    let validPublisher = publisher.length > 0;
    if (validTitle && validSummary && validDate && validPublisher) {
      handleCreateArticle();
      setIsSuccessAlertVisible(true);

      handleResetInputs();
    } else {
      setIsSuccessAlertVisible(false);
      setIsErrorAlertVisible(true);
    }
  };

  return (
    <Container
      className="article-list-wrapper"
      p={10}
      boxShadow="lg"
      borderRadius="md"
    >
      <div className="article-list-form">
        {IsErrorAlert ? <ErrorAlert onClick={closeErrorAlert} /> : <></>}
        {IsSuccessAlert ? <SuccessAlert onClick={closeSuccessAlert} /> : <></>}
        <div className="form-wrapper" onSubmit={handleSubmitArticle}>
          <FormControl
            variant="floating"
            isRequired
            isInvalid={title.length === 0}
            mt={8}
          >
            <Input
              className="form-input"
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              placeholder=" "
            />
            <FormLabel className="form-label" htmlFor="title">
              Title
            </FormLabel>
            <FormErrorMessage>Title is required.</FormErrorMessage>
          </FormControl>

          <FormControl
            variant="floating"
            isRequired
            isInvalid={summary.length === 0}
            mt={8}
          >
            <Textarea
              className="form-input"
              id="summary"
              name="summary"
              value={summary}
              onChange={(e) => setSummary(e.currentTarget.value)}
              minH="350px"
              placeholder="Summary"
            ></Textarea>
            <FormLabel className="form-label" htmlFor="summary">
              Summary
            </FormLabel>
            <FormErrorMessage>Summary is required.</FormErrorMessage>
          </FormControl>

          <FormControl isRequired mt={8} isInvalid={date.length === 0}>
            <FormLabel className="form-label" htmlFor="date">
              Date:
            </FormLabel>
            <Input
              className="form-input"
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.currentTarget.value)}
            />
            <FormErrorMessage>Date is required.</FormErrorMessage>
          </FormControl>

          <FormControl
            variant="floating"
            isRequired
            mt={8}
            isInvalid={publisher.length === 0}
          >
            <Input
              className="form-input"
              type="text"
              id="publisher"
              name="publisher"
              value={publisher}
              onChange={(e) => setPublisher(e.currentTarget.value)}
              placeholder="Publisher"
            />
            <FormLabel className="form-label" htmlFor="publisher">
              Publisher
            </FormLabel>
            <FormErrorMessage>Publisher is required.</FormErrorMessage>
          </FormControl>
        </div>
        <Box display="flex" justifyContent="left" mt={8}>
          <ButtonGroup spacing={4}>
            <Button onClick={goToHome}>Back to Home</Button>
            <Button
              onClick={handleSubmitArticle}
              colorScheme="blue"
              variant="solid"
              className="btn btn-add"
            >
              Add the article
            </Button>
          </ButtonGroup>
        </Box>
      </div>
    </Container>
  );
};
