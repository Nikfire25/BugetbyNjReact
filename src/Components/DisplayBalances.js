import React from "react";
import { Segment, Grid } from "semantic-ui-react";
import DisplayIncomeExpense from "./DisplayIncomeExpense";

const DisplayBalances = () => {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayIncomeExpense title="Income" value="450.50" color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayIncomeExpense title="Expense" value="100.50" color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
