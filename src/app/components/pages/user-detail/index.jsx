import React from 'react';
import { Router, RouteHandler } from 'react-router';

class UserDetail extends React.Component {
  constructor() {
    super();

    // This is dummy data for testing, the real data should get information of only user one from server base
    // on user id on url param.
    this.userList = [ {id: 1, name: 'David Something', username: 'davids', email: 'davids@gmail.com', role: 'Admin', group: 'a'},
                {id: 2, name: 'Angel Eco', username: 'angel', email: 'angel@gmail.com', role: 'System admin', group: 'b'},
                {id: 3, name: 'Ball Square', username: 'ball', email: 'ball@gmail.com', role: 'Manager', group: 'c'},
                {id: 4, name: 'Thuan Su', username: 'thuansu', email: 'thuansu@gmail.com', role: 'Dev', group: 'd'},
              ];

    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    let { query } = this.props.location;
    let id = query && query.id ? query.id : 4;

    let selectedUser = this.userList.find((user) => user.id == id);

    this.setState({
      user: selectedUser
    });
  }

  render() {
    return (
      <div>
        <div className="col-sm-3">
          <img src="./images/avatar.png" />
        </div>
        <div className="col-sm-7">
          <ul>
            <li>Name: {this.state.user.name}</li>
            <li>Username: {this.state.user.username}</li>
            <li>Email: {this.state.user.email}</li>
            <li>User role: {this.state.user.role}</li>
            <li>Group: {this.state.user.group}</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

    );
  }
}

UserDetail.propTypes = {
  location: React.PropTypes.object.isRequired
}

module.exports = UserDetail;
