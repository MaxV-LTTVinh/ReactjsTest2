import React, { Component } from "react";
import Todo from "./TodoLists/Todo";

class ListTodo extends Component {
    render() {
        const elmTodo = this.props.todoList.map((item, index) => {
            return (
                <Todo
                    onClickEdit={this.props.onClickEdit}
                    handelDeleteTodo={this.props.handelDeleteTodo}
                    todo={item}
                    key={index}
                    index={index}
                />
            );
        });
        return (
            <div className="card">
                <div className="card-header bg-success">List Task</div>
                <div className="card-body p-0">
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th style={{ width: "10%" }}>#</th>
                                <th>Task</th>
                                <th style={{ width: "10%" }}>Level</th>
                                <th style={{ width: "20%" }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>{elmTodo}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodo;
