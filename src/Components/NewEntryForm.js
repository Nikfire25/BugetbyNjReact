// import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

const NewEntryForm = ({
  addEntry,
  title,
  value,
  isExpense,
  setTitle,
  setValue,
  setIsExpense,
}) => {
  return (
    <Form unstackable>
      <EntryForm
        title={title}
        value={value}
        setValue={setValue}
        setTitle={setTitle}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
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
