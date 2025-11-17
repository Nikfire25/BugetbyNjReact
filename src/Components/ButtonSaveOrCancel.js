import React from "react";
import { Button } from "semantic-ui-react";

const ButtonSaveOrCancel = ({ addEntry, title, value, isExpense }) => {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button width>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry(title, value, isExpense)}>
        Ok
      </Button>
    </Button.Group>
  );
};

export default ButtonSaveOrCancel;
