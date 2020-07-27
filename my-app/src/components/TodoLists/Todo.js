import React, { Component } from "react";

class Todo extends Component {

    setElementLevel = (level) => {
        let elmStatus = <span className="badge badge-secondary">small</span>;
        if (level === 1) {
            elmStatus = <span className="badge  badge-info">medium</span>;
        } else if (level === 2) {
            elmStatus = <span className="badge badge-danger">high</span>;
        }
        return elmStatus;
    }
    handleDelete = (id) => {
        this.props.handelDeleteTodo(id);
    }
    onClickEdit = (todo) => {
        this.props.onClickEdit(todo);
    }
    render() {
        const todo = this.props.todo;
        const index = this.props.index;
        //console.log(key);

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{todo.task}</td>
                <td style={{ textAlign: "center", verticalAlign: "middle" }}>
                    {this.setElementLevel(todo.level)}
                </td>
                <td
                    className="btn-group-sm"
                    style={{ verticalAlign: "middle" }}
                >
                    <button
                        type="button"
                        className="btn btn-warning btn-sm"
                        onClick={() => this.onClickEdit(todo)}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(todo.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default Todo;
