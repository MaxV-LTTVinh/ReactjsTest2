import React, { Component } from "react";
const { v4: uuidv4 } = require('uuid');

class FormAdd extends Component {
    constructor(props) {
        super(props);
        this.clickClose = this.clickClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            task: "",
            level: 0,
        };
    }
    clickClose() {
        this.props.onClickClose();
    }

    handleSubmit(event) {
        event.preventDefault();  
        console.log(this.state);
        let todo = {
            id: uuidv4(),
            task: this.state.task,
            level: this.state.level
        }

        this.props.onClickSubmit(todo);      
    }

    handleChange(event) {
        this.setState({
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        });
    }
    render() {
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
                                value={this.state.name}
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
