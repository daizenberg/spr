import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SignOn from './SignOn';
import Search from './Search';
import Axios from 'axios';
import DisplayArea from './DisplayArea';

class App extends React.Component{
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      displayObjects: []
    };
  }
  onSubmit(query) {
    let params = {
      type: 'album',
      q: query.query
    };
    Axios.get('https://api.spotify.com/v1/search', {params})
      .then( (resp) => { console.log(resp.data.albums.items); this.setState({displayObjects: resp.data.albums.items}) } )
      .catch( (resp) => { console.log(resp); } );
  }
  render() {
    return <Grid>
        <Row className="show-grid">
          <Col xs={10} md={10}>
            <Search onSubmit={this.onSubmit} />
          </Col>
          <Col xs={2} md={2}>
            <SignOn />
          </Col>
        </Row>

        <Row className="show-grid">
          <DisplayArea data={this.state.displayObjects} />
        </Row>
      </Grid>;
  }
}
/*
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
*/
export default App;
