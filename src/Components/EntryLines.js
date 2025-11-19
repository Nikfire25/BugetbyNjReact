import React from "react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries, isOpen, setIsOpen, editEntry }) => {
  return (
    <>
      {entries.map((entry) => (
        <EntryLine
          {...entry}
          key={entry.id}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          editEntry={editEntry}
        />
      ))}
    </>
  );
};

export default EntryLines;
