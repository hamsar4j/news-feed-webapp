import { Spinner, Container } from "@chakra-ui/react";

export const LoadingIcon = () => {
  return (
    <Container
      w="100vw"
      h="100vh"
      alignItems="center"
      display="flex"
      justifyContent="center"
    >
      <div>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </div>
    </Container>
  );
};
