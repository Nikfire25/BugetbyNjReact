import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { useDispatch } from "react-redux";
import { closeEditModal } from "../Redux/Actions/modal.action";

const ModalEdit = ({
  isOpen,
  setIsOpen,
  title,
  value,
  isExpense,
  setTitle,
  setValue,
  setIsExpense,
}) => {
  const dispatch = useDispatch();
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          title={title}
          value={value}
          setValue={setValue}
          setTitle={setTitle}
          isExpense={isExpense}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => dispatch(closeEditModal())}>
          <Icon name="close" />
        </Button>
        <Button onClick={() => setIsOpen(false)} primary>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
