import React, { Component } from "react";

class ListTodo extends Component {
    render() {
        return (
            <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th style={{width: '10%'}}>#</th>
              <th>Task</th>
              <th style={{width: '20%'}}>Level</th>
              <th style={{width: '20%'}}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </td>
              <td>status</td>
              <td>
                <button type="button" className="btn btn-warning">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </td>
              <td>status</td>
              <td>
                <button type="button" className="btn btn-warning">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </td>
              <td>status</td>
              <td>
                <button type="button" className="btn btn-warning">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        );
    }
}

export default ListTodo;
