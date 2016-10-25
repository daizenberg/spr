import React from 'react';
import { FormControl, DropdownButton, MenuItem } from 'react-bootstrap';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: '',
      scope: 'all'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.props.onSubmit) {
      this.props.onSubmit({
        query: 'stub',
        scope: 'all'
      });
    }
  }
  render() {
    return <form onSubmit={this.handleSubmit}>
            <FormControl
              type = "text"
              value = {this.state.query}
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

Search.propTypes = {
    onSubmit: React.PropTypes.func
};

export default Search;
