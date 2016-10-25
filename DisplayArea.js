import React from 'react';

class DisplayArea extends React.Component {
  render() {
    return <div>
        {this.props.data.map(d => <div>{JSON.stringify(d)}</div>)}
      </div>;
  }
}

export default DisplayArea;
