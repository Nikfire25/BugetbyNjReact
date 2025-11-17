import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";

const EntryLine = ({
  id,
  title,
  value,
  isExpense = false,
  deleteEntry,
  isOpen,
  setIsOpen,
  editEntry,
}) => {
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} divided textAlign="center">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {title}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $ {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={() => editEntry(id)} />
              <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;
