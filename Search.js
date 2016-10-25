import React from 'react';
import { FormControl, DropdownButton, MenuItem } from 'react-bootstrap';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    console.log(e);
    alert(e);
  }
  render() {
    return <form onSubmit={this.handleSubmit}>
            <FormControl
              type = "text"
              //width = {5}
              value = {this.state.value}
              placeholder = "Find"
              onChange = {this.handleChange}
            />
            <FormControl componentClass="select">
              <option value="all">All</option>
              <option value="album">Album</option>
              <option value="artist">Artist</option>
              <option value="track">Track</option>
            </FormControl>
      </form>;
  }
}

export default Search;
