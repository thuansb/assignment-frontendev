import React from 'react';
import { Router, RouteHandler } from 'react-router';
import BSTable from './my-bs-table.jsx';

class Users extends React.Component {
  render() {
    return (
      <div>
        <BSTable />
      </div>
    );
  }
}

module.exports = Users;
