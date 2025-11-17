import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <div>
      <Container>
        <Header as="h1">Budget</Header>

        <Statistic size="small">
          <Statistic.Label>Your Balance:</Statistic.Label>
          <Statistic.Value>250.52</Statistic.Value>
        </Statistic>

        <Segment textAlign="center">
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Statistic size="tiny" color="green">
                  <Statistic.Label style={{ textAlign: "left" }}>
                    Income:
                  </Statistic.Label>
                  <Statistic.Value>140.5</Statistic.Value>
                </Statistic>
              </Grid.Column>
              <Grid.Column>
                <Statistic size="tiny" color="red">
                  <Statistic.Label style={{ textAlign: "left" }}>
                    Expenses:
                  </Statistic.Label>
                  <Statistic.Value>14.25</Statistic.Value>
                </Statistic>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Header as="h3">History</Header>
        <Segment color="red">
          <Grid columns={3} divided textAlign="center">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                Something
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                10
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered />
                <Icon name="trash" bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment color="green">
          <Grid columns={3} divided textAlign="center">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                Something Else
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                10
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered />
                <Icon name="trash" bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment color="red">
          <Grid columns={3} divided textAlign="center">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                Something
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                10
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered />
                <Icon name="trash" bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment color="green">
          <Grid columns={3} divided textAlign="center">
            <Grid.Row>
              <Grid.Column width={10} textAlign="left">
                Something Else
              </Grid.Column>
              <Grid.Column width={3} textAlign="right">
                10
              </Grid.Column>
              <Grid.Column width={3}>
                <Icon name="edit" bordered />
                <Icon name="trash" bordered />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Header as="h3">Add New Transaction</Header>
        <Form unstackable>
          <Form.Group>
            <Form.Input
              placeholder="New Shiny Thing"
              icon="tags"
              width={12}
              label="Description"
            />
            <Form.Input
              width={4}
              label="Value"
              placeholder="100.00"
              icon="dollar"
              iconPosition="left"
            />
          </Form.Group>
          <Button.Group style={{ marginTop: 20 }}>
            <Button width>Cancel</Button>
            <Button.Or />
            <Button primary>Ok</Button>
          </Button.Group>
        </Form>
      </Container>
    </div>
  );
}

export default App;
