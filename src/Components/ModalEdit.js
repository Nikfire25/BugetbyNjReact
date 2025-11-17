import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import EntryForm from "./EntryForm";

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
        <Button onClick={() => setIsOpen(false)}>
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
