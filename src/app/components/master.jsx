const React = require('react');
const { Router, RouteHandler } = require('react-router');
const Auth = require('../utils/auth.js');

class Master extends React.Component {

  render() {
    let signoutBtn = (
      <div style={{ top: '5px', right: '5px', position: 'absolute' }}>
        Hello admin <a href="#" onClick={ () => {
            Auth.handleLogout();
            console.log(this.context.router);
            this.context.router.push('/login');
          }
        }>Sign out</a>
      </div>
    );

    return <div>
      <header>
        <h2 style={{ padding: '15px' }}>User Management System</h2>
        { Auth.isLoggedIn()?signoutBtn:null }
      </header>
      { this.props.children }
    </div>;
  }
}

Master.contextTypes = {
  router: React.PropTypes.object.isRequired
}

module.exports = Master;
