import React from "react";
import { Form, Segment, Checkbox } from "semantic-ui-react";

const EntryForm = ({
  title,
  value,
  setTitle,
  setValue,
  isExpense,
  setIsExpense,
}) => {
  return (
    <>
      <Form.Group>
        <Form.Input
          placeholder="New Shiney Thing"
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
    </>
  );
};

export default EntryForm;
