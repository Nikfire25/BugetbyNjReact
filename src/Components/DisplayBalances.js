import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import DisplayIncomeExpense from "./DisplayIncomeExpense";

const DisplayBalances = ({ income, expense }) => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayIncomeExpense title="Income" value={income} color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayIncomeExpense title="Expense" value={expense} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
