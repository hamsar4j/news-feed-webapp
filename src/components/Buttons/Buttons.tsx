import { IconButton, ButtonProps } from "@chakra-ui/react";
import {
  AddIcon,
  CheckIcon,
  CloseIcon,
  DeleteIcon,
  EditIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

export const CancelEditButton = (props: ButtonProps) => {
  return (
    <IconButton
      aria-label="cancel edit"
      icon={<CloseIcon />}
      colorScheme="red"
      variant="solid"
      size="sm"
      onClick={props.onClick}
    />
  );
};

export const DeleteButton = (props: ButtonProps) => {
  return (
    <IconButton
      aria-label="delete article"
      icon={<DeleteIcon />}
      colorScheme="red"
      variant="outline"
      className="btn btn-remove"
      size="sm"
      onClick={props.onClick}
    />
  );
};

export const ToggleEditButton = (props: ButtonProps) => {
  return (
    <IconButton
      aria-label="edit article"
      icon={<EditIcon />}
      colorScheme="blue"
      variant="outline"
      className="btn btn-edit"
      size="sm"
      onClick={props.onClick}
    />
  );
};

export const SaveChangesButton = (props: ButtonProps) => {
  return (
    <IconButton
      aria-label="save changes"
      icon={<CheckIcon />}
      colorScheme="green"
      variant="solid"
      size="sm"
      onClick={props.onClick}
    />
  );
};

export const RefreshButton = (props: ButtonProps) => {
  return (
    <IconButton
      aria-label="refresh page"
      icon={<RepeatIcon />}
      isRound={true}
      onClick={props.onClick}
    />
  );
};

export const AddButton = (props: ButtonProps) => {
  return (
    <IconButton
      aria-label="create new article"
      icon={<AddIcon />}
      colorScheme="blue"
      onClick={props.onClick}
    />
  );
};
