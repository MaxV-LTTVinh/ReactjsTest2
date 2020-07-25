import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    setElementLevel(level) {
        let elmStatus ="";
        switch (level) {
            case 0:
                elmStatus = <span className="badge badge-secondary">small</span>;
                break;
            case 1:
                elmStatus = <span className="badge  badge-info">medium</span>;
                break;

            case 2:
                elmStatus = <span className="badge badge-danger">high</span>;
                break;
        }
        return elmStatus
    }

    render() {
        const todo = this.props.todo;
        const index = this.props.index;
        //console.log(key);
        
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{todo.task}</td>
                <td style={{ textAlign: 'center',verticalAlign: 'middle'}}>{this.setElementLevel(todo.level)}</td>
                <td>
                    <button type="button" className="btn btn-warning">
                        Edit
                    </button>
                    <button type="button" className="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
    
}

export default Todo;
