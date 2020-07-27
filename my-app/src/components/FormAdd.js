import React, { Component } from "react";

class FormAdd extends Component {
    state = {
        id : '',
        task: "",
        level: 0,
    };
    clickClose = () => {
        this.props.onClickClose();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let todo = {
            id: this.state.id,
            task: this.state.task,
            level: this.state.level
        }

        this.props.onClickSubmit(todo);     
        // this.setState({
        //     id : '',
        //     task: "",
        //     level: 0,
        // } );
    }

    componentWillMount = () => {
        let todoSelected = this.props.todoSelected;
        if(todoSelected != null && todoSelected.id != ''){
            this.setState({
                id : todoSelected.id,
                task: todoSelected.task,
                level: todoSelected.level,
            })
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.todoSelected != null && nextProps.todoSelected.id !== ''){
            this.setState({
                id : nextProps.todoSelected.id,
                task: nextProps.todoSelected.task,
                level: nextProps.todoSelected.level,
            })
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        });
    }
    render() {
        //console.log(this.props.todoSelected);
        return (
            <div className="row m-1">
                <div className="col-md-4 col-lg-6 col-xl-7" />
                <div className="col-md-8 col-lg-6 col-xl-5">
                    <form onSubmit={this.handleSubmit} className="form-inline">
                        <div className="form-group">
                            <div className="input-group">
                                <input
                                    value={this.state.task}
                                    onChange={this.handleChange}
                                    name="task"
                                    type="text"
                                    className="form-control"
                                    placeholder="Task name"
                                />
                            </div>
                            <label className="sr-only" htmlFor="" />
                            <select
                                value={this.state.level}
                                onChange={this.handleChange}
                                className="form-control"
                                name="level"
                                onChange={this.handleChange}
                                required
                            >
                                <option value={0}> small</option>
                                <option value={1}>medium</option>
                                <option value={2}>high</option>
                            </select>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                            <button type="button" className="btn btn-default" onClick={this.clickClose}>
                            Cancel
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormAdd;
