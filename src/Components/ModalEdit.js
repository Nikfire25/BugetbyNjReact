import React from "react";
import { Modal, Button, Icon } from "semantic-ui-react";
import NewEntryForm from "./NewEntryForm";

const ModalEdit = ({ isOpen, setIsOpen }) => {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <NewEntryForm />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>
          <Icon name="close" />
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;
