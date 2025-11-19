import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryRedux } from "../Redux/Actions/enteries.actions";
import { v4 as uuidv4 } from "uuid";

const useEntryDetails = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const dispatch = useDispatch();
  const resetEntry = () => {
    setTitle("");
    setValue("");
    setIsExpense("");
  };

  function addEntry() {
    dispatch(addEntryRedux({ id: uuidv4(), title, value, isExpense }));
    resetEntry();
  }
  return {
    title,
    setTitle,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry,
  };
};

export default useEntryDetails;
