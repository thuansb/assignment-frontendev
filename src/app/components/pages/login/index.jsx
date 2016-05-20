import React from 'react';
import { Router, RouteHandler } from 'react-router';
import Auth from '../../../utils/auth.js';
import Style from './style.js';

class Login extends React.Component {

  componentDidMount() {
    this.location =  this.props.location;
  }

  render() {
    return (
        <form className="form-horizontal form-signin" style={ Style.formSignin } role="form" onSubmit={this.handleLogin.bind(this)}>
          <h2 style={ Style.formHeader }>Please login</h2>
          <span>(Username: admin@abc.com, pass: admin)</span>
          <div className="form-group">
            <label className="control-label col-sm-2" for="email">Email:</label>
            <div className="col-sm-10">
              <input ref="email" type="email" className="form-control" id="email" defaultValue="admin@abc.com"/>
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-2" for="pwd">Password:</label>
            <div className="col-sm-10">
              <input ref="password" type="password" className="form-control" id="pwd" placeholder="admin"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <div className="checkbox">
                <label><input type="checkbox"/> Remember me</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>
    );
  }

  handleLogin (e) {
    e.preventDefault();
    if(this.refs.email.value && this.refs.password.value) {
      let result = Auth.handleLogin(this.refs.email.value, this.refs.password.value);

      if(result) {
        // Navigate to target page after login.
        if (this.location.state && this.location.state.nextPathname) {
          console.log(this.location.state);
  				this.context.router.replace({
  					pathname: this.location.state.nextPathname
  				});
  			} else {
  				this.context.router.replace('/users');
  			}
      } else {
        alert('Wrong username or password!');
      }
    } else {
      alert('Please enter username, password')
    }
  };
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
}

Login.propTypes = {
  location: React.PropTypes.object.isRequired
}

module.exports = Login;
