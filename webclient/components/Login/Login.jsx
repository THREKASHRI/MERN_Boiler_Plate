import React from 'react';
import { Input, Button, Icon} from 'semantic-ui-react';
let {hashHistory} = require('react-router');
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email:'',
      password:''
    };
    this.onSubmitLoginData = this.onSubmitLoginData.bind(this);
    this.ChangeEmail = this.ChangeEmail.bind(this);
    this.ChangePassword = this.ChangePassword.bind(this);
  }
  ChangeEmail(e){
    this.setState({email:e.target.value});
  }
  ChangePassword(e){
    this.setState({password:e.target.value});
  }
  onSubmitLoginData(){
    console.log("inside here",this.state.email,this.state.password);
    let context = this;
    $.ajax({
                url: '/users/login',
                type: 'POST',
                data: {
                    email: context.state.email,
                    password: context.state.password
                },
                success: function(res) {
                  cookies.set('email', res.email);
                  hashHistory.push('/home');
                },
                error: function(err) {
                  console.log("error ",err);
                }
            });
  }
  render() {
    return (
      <div>
                    <Input type='name' name = 'name' onChange={this.ChangeEmail}
                     placeholder = 'Enter Email Id' required /><br/>

                    <Input type='password' name="password" onChange={this.ChangePassword}
                    placeholder = 'Enter Password' required/><br/>

                    <Button color='teal' circular onClick={this.onSubmitLoginData}>
                      Login
                    </Button><br/><br/>
      </div>
    );
  }
}

module.exports = Login;
