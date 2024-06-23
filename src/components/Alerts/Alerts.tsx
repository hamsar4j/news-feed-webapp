import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  ButtonProps,
  Box,
} from "@chakra-ui/react";

export const ErrorAlert = (props: ButtonProps) => {
  return (
    <Alert status="error" borderRadius="md">
      <AlertIcon />
      <Box>
        <AlertTitle>The input fields cannot be empty!</AlertTitle>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="absolute"
        right={2}
        top={2}
        onClick={props.onClick}
      />
    </Alert>
  );
};

export const SuccessAlert = (props: ButtonProps) => {
  return (
    <Alert status="success" borderRadius="md">
      <AlertIcon />
      <Box>
        <AlertTitle>The article was created successfully!</AlertTitle>
      </Box>
      <CloseButton
        alignSelf="flex-start"
        position="absolute"
        right={2}
        top={2}
        onClick={props.onClick}
      />
    </Alert>
  );
};
