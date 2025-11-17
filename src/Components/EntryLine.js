import React, { useState } from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

const EntryLine = ({ id, title, value, isExpense = false, deleteEntry }) => {
  const [isOpen, setIsOpen] = useState(false);
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
              <Icon name="edit" bordered onClick={() => setIsOpen(true)} />
              <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default EntryLine;
