import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import NewEntryForm from "./Components/NewEntryForm";
import DisplayIncomeExpense from "./Components/DisplayIncomeExpense";
import DisplayBalances from "./Components/DisplayBalances";
import { useState } from "react";
import EntryLines from "./Components/EntryLines";

function App() {
  const [entries, setEnteries] = useState(initEnteries);
  const income = entries
    .filter((entry) => !entry.isExpense)
    .reduce((total, entry) => (total += +entry.value), 0);

  const expense = entries
    .filter((entry) => entry.isExpense)
    .reduce((total, entry) => (total += +entry.value), 0);

  const bal = income - expense;

  const deleteEntry = (id) => {
    setEnteries((prev) => prev.filter((entry) => entry.id !== id));
  };

  const addEntry = (title, value, isExpense) => {
    const res = entries.concat({
      id: entries.length + 1,
      title,
      value,
      isExpense,
    });
    setEnteries(res);
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
        <EntryLines entries={entries} deleteEntry={deleteEntry} />

        {/* Transaction Entry */}

        <MainHeader title="Add your Transaction" type="h3" />
        <NewEntryForm addEntry={addEntry} />
      </Container>
    </div>
  );
}

export default App;

var initEnteries = [
  { id: 1, title: "Work Income", value: 1000, isExpense: false },
  { id: 2, title: "Water Bill", value: 20, isExpense: true },
  { id: 3, title: "Rent", value: 300, isExpense: true },
  { id: 4, title: "Power Bill", value: 50, isExpense: true },
];
