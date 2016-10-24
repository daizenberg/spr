import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

/*class App extends React.Component{
  render() {
    return <Button>Hi</Button>;
  }
}*/

const App = () => (
  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={8}>Search</Col>
      <Col xs={6} md={4}>Sign In</Col>
    </Row>

    <Row className="show-grid">
    </Row>
  </Grid>
);

export default App;
