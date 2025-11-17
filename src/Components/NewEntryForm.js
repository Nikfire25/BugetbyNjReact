import React, { useState } from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

const NewEntryForm = ({ addEntry }) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          placeholder="New Shiny Thing"
          icon="tags"
          width={12}
          label="Description"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle="Is Expense"
          checked={isExpense}
          onChange={() => setIsExpense(!isExpense)}
        />
      </Segment>
      <ButtonSaveOrCancel
        addEntry={addEntry}
        title={title}
        value={value}
        isExpense={isExpense}
      />
    </Form>
  );
};

export default NewEntryForm;
