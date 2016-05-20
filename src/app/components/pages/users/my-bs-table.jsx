import React from 'react';
import { Button, Input } from 'react-bootstrap';
import { Link } from 'react-router';

class MyBSTable extends React.Component {

  constructor() {
    super();

    this.state = {
      userList: []
    }

    this.handleClickAddBtn = this.handleClickAddBtn.bind(this);
    this.handleClickDelBtn = this.handleClickDelBtn.bind(this);
  }

  componentDidMount() {
    // Get list member from server then update the UI
    this.setState({
      userList: [ {id: 1, name: 'David Something', username: 'davids', email: 'davids@gmail.com', role: 'Admin', group: 'a'},
                  {id: 2, name: 'Angel Eco', username: 'angel', email: 'angel@gmail.com', role: 'System admin', group: 'b'},
                  {id: 3, name: 'Ball Square', username: 'ball', email: 'ball@gmail.com', role: 'Manager', group: 'c'},
                  {id: 4, name: 'Thuan Su', username: 'thuansu', email: 'thuansu@gmail.com', role: 'Dev', group: 'd'},
                ]
    });
  }

  renderBSTable() {
    let rows = null;
    if(this.state.userList && this.state.userList.length > 0) {
      rows =  this.state.userList.map((user, id) => {
        return (
          <tr key={'row' + id}>
            <td><Link to={{ pathname: '/user-detail', query: { id: user.id } }}>{user.name}</Link> </td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.group}</td>
            <td className="action-col">
              <Button data-id={user.id} bsStyle="warning" bsSize='xs' onClick={this.handleClickDelBtn.bind(null, user.id)}>del</Button>
            </td>
          </tr>
        )
      });
    }

    return (
      <div className="table-container">
        <table height="400px" className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th width="20%">Name</th>
              <th width="10%">Username</th>
              <th width="20%">Email</th>
              <th width="10%">User role</th>
              <th>Group</th>
              <th width="15%"></th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    return (
      <div>
        <form className="form-horizontal" role="form" onSubmit={ this.handleClickAddBtn }>
          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="name">Name:</label>
            <div className="col-sm-4">
              <input type="text" id="name" className="form-control" ref="name"
              placeholder="Thuan" maxLength="50"/>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="fullname">Username</label>
            <div className="col-sm-4">
              <input type="text" id="username" className="form-control" ref="username"
                placeholder="thuansb" maxLength="50"/>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="email">Email address:</label>
            <div className="col-sm-4">
              <input type="email" id="email" className="form-control" ref="email"
                placeholder="thuan.suba@gmail.com" maxLength="50"/>
            </div>
          </div>

          <div className="form-group">
            <label className="control-label col-sm-2" htmlFor="role">User role:</label>
            <div className="col-sm-4">
              <input type="text" id="role" className="form-control" ref="role"
                placeholder="admin" maxLength="50"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-4">
              <Button type="submit" bsStyle="primary">Add</Button>
            </div>
          </div>
        </form>
        {this.renderBSTable()}
      </div>
    );
  }

  handleClickDelBtn(id) {
    // call server api to delete then update the UI
    let newUserList = this.state.userList.filter((user) => (user.id != id));
    this.setState({
      userList: newUserList
    });
  }

  handleClickAddBtn(e) {
    e.preventDefault();
    if(this.refs.name.value && this.refs.username.value && this.refs.email.value && this.refs.role.value) {
      let newState = this.state.userList;
      newState.push({
        id: newState[newState.length-1] + 1,
        name: this.refs.name.value,
        username: this.refs.username.value,
        email: this.refs.email.value,
        role: this.refs.role.value
      });

      this.resetFormValue();

      this.setState({
        teamMemberList: newState
      });
    } else {
      alert('wrong input!')
    }
  }

  resetFormValue() {
    // reset the editting value
    this.refs.name.value = '';
    this.refs.username.value = '';
    this.refs.email.value = '';
    this.refs.role.value = '';
  }
};

module.exports = MyBSTable;
