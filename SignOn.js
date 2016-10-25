import React from 'react';
import { Button } from 'react-bootstrap';

class SignOn extends React.Component {
  beginSignOn() {
    alert('signing on!!!');
  }
  render() {
    return <Button bsStyle="link" onClick={this.beginSignOn}>Sign On</Button>;
  }
}

//const SignOn = () => <Button bsStyle="link">Sign On</Button>;

export default SignOn;
