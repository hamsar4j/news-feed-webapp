import { IconButton, ButtonProps, Tooltip } from "@chakra-ui/react";
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
    <Tooltip label="Cancel" fontSize="xs">
      <IconButton
        aria-label="cancel edit"
        icon={<CloseIcon />}
        colorScheme="red"
        variant="solid"
        size="sm"
        onClick={props.onClick}
      />
    </Tooltip>
  );
};

export const DeleteButton = (props: ButtonProps) => {
  return (
    <Tooltip label="Delete Article" fontSize="xs">
      <IconButton
        aria-label="delete article"
        icon={<DeleteIcon />}
        colorScheme="red"
        variant="outline"
        className="btn btn-remove"
        size="sm"
        onClick={props.onClick}
      />
    </Tooltip>
  );
};

export const ToggleEditButton = (props: ButtonProps) => {
  return (
    <Tooltip label="Edit Article" fontSize="xs">
      <IconButton
        aria-label="edit article"
        icon={<EditIcon />}
        colorScheme="blue"
        variant="outline"
        className="btn btn-edit"
        size="sm"
        onClick={props.onClick}
      />
    </Tooltip>
  );
};

export const SaveChangesButton = (props: ButtonProps) => {
  return (
    <Tooltip label="Save Changes" fontSize="xs">
      <IconButton
        aria-label="save changes"
        icon={<CheckIcon />}
        colorScheme="green"
        variant="solid"
        size="sm"
        onClick={props.onClick}
      />
    </Tooltip>
  );
};

export const RefreshButton = (props: ButtonProps) => {
  return (
    <Tooltip label="Refresh" fontSize="xs">
      <IconButton
        aria-label="refresh page"
        icon={<RepeatIcon />}
        isRound={true}
        onClick={props.onClick}
      />
    </Tooltip>
  );
};

export const AddButton = (props: ButtonProps) => {
  return (
    <Tooltip label="Create New Article" fontSize="xs">
      <IconButton
        aria-label="create new article"
        icon={<AddIcon />}
        colorScheme="blue"
        onClick={props.onClick}
      />
    </Tooltip>
  );
};
