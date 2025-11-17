import React from "react";
import EntryLine from "./EntryLine";

const EntryLines = ({ entries, deleteEntry }) => {
  return (
    <>
      {entries.map((entry) => (
        <EntryLine {...entry} deleteEntry={deleteEntry} key={entry.id} />
      ))}
    </>
  );
};

export default EntryLines;
