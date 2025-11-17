import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./Components/MainHeader";
import NewEntryForm from "./Components/NewEntryForm";
import DisplayIncomeExpense from "./Components/DisplayIncomeExpense";
import DisplayBalances from "./Components/DisplayBalances";
import EntryLine from "./Components/EntryLine";

function App() {
  return (
    <div>
      <Container>
        <MainHeader title="Track you Budget" />

        {/* Balance*/}
        <DisplayIncomeExpense
          title="Balance"
          value="100.50"
          color="black"
          size="small"
        />

        {/* Income and Expenses */}

        <DisplayBalances />

        {/* Transaction History */}
        <MainHeader title="History" type="h3" />
        <EntryLine isExpense="true" title="Something" value="100" />
        <EntryLine title="Something Else" value="1000" />
        <EntryLine isExpense="true" title="Something" value="100" />

        {/* Transaction Entry */}
        <MainHeader title="Add your Transaction" type="h3" />
        <NewEntryForm />
      </Container>
    </div>
  );
}

export default App;
