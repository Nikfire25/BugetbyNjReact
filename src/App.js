import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import NewEntryForm from "./Components/NewEntryForm";
import DisplayIncomeExpense from "./Components/DisplayIncomeExpense";
import DisplayBalances from "./Components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./Components/EntryLines";
import ModalEdit from "./Components/ModalEdit";
import { useSelector } from "react-redux";

function App() {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const enteries = useSelector((state) => state.entries);
  const isOpenRedux = useSelector((state) => state.modals.isOpen);

  const income = enteries
    .filter((entry) => !entry.isExpense)
    .reduce((total, entry) => (total += +entry.value), 0);

  const expense = enteries
    .filter((entry) => entry.isExpense)
    .reduce((total, entry) => (total += +entry.value), 0);

  const bal = income - expense;

  const resetEntry = () => {
    setTitle("");
    setValue("");
    setIsExpense("");
  };

  useEffect(() => {
    if (!isOpenRedux && entryId) {
      const index = enteries.findIndex((entry) => entry.id === entryId);
      const newEnteries = [...enteries];
      newEnteries[index].title = title;
      newEnteries[index].value = value;
      newEnteries[index].isExpense = isExpense;
      // setEnteries(newEnteries);
      resetEntry();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const addEntry = (title, value, isExpense) => {
    const res = enteries.concat({
      id: enteries.length + 1,
      title,
      value,
      isExpense,
    });
    // setEnteries(res);
    resetEntry();
  };

  const editEntry = (id) => {
    if (id) {
      const index = enteries.findIndex((entry) => entry.id === id);
      const entry = enteries[index];
      setEntryId(id);
      setTitle(entry.title);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  };

  return (
    <div>
      <Container>
        {/* Main Header */}

        <MainHeader title="Track you Budget" />

        {/* Balance*/}

        <DisplayIncomeExpense
          title="Balance"
          value={bal}
          color="black"
          size="small"
        />

        {/* Income and Expenses */}

        <DisplayBalances income={income} expense={expense} />

        {/* Transaction History */}

        <MainHeader title="History" type="h3" />
        <EntryLines
          entries={enteries}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          editEntry={editEntry}
        />

        {/* Transaction Entry */}

        <MainHeader title="Add your Transaction" type="h3" />
        <NewEntryForm
          addEntry={addEntry}
          title={title}
          value={value}
          isExpense={isExpense}
          setTitle={setTitle}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
        <ModalEdit
          isOpen={isOpenRedux}
          setIsOpen={setIsOpen}
          title={title}
          value={value}
          isExpense={isExpense}
          setTitle={setTitle}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
      </Container>
    </div>
  );
}

export default App;
