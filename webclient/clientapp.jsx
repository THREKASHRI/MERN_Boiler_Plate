const React = require('react');
const ReactDOM = require('react-dom');
const {browserHistory, hashHistory, Route, Router} = require('react-router');
const login = require('./components/Login/Login.jsx');
const home = require('./components/landingPage/home.jsx');
const MainComp = React.createClass({
  render: function() {
    return (
      <div>
                  <NavBar/>
                  <br/>
                  <br/>

                  {this.props.children}
              </div>
    );
  }
});
ReactDOM.render(
  <Router history={hashHistory}>

  {/* <Route path="/phleboHome" component={phleboHome}/>*/}
  {/* <Route component={MainComp}> */}
    <Route path="/" component={login}/>
    <Route path="/home" component={home}/>
    {/* <Route path="/logPage" component={logPage}/> */}
  {/* </Route> */}
</Router>, document.getElementById('app'));
