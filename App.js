import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SignOn from './SignOn';
import Search from './Search';

/*class App extends React.Component{
  render() {
    return <Button>Hi</Button>;
  }
}*/

const App = () =>
  <Grid>
    <Row className="show-grid">
      <Col xs={10} md={10}>
        <Search />
      </Col>
      <Col xs={2} md={2}>
        <SignOn />
      </Col>
    </Row>

    <Row className="show-grid">
    </Row>
  </Grid>;

export default App;
