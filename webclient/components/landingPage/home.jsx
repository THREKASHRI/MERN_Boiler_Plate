import React from 'react';
import { Button } from 'semantic-ui-react';
let {hashHistory} = require('react-router');
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  logout(){
    cookies.remove('email');
    hashHistory.push('/');
  }
  render() {
    return (
      <div>
      <h3>Welcome {cookies.get('email')}</h3>
      <Button onClick={this.logout.bind(this)} color='red'>Logout</Button>
      </div>
    )
  }
}
module.exports = Home;
