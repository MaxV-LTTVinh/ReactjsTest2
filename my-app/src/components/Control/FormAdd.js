import React, { Component } from "react";

class FormAdd extends Component {
    render() {
        return (
            <div className="col-md-5">
                    <form action method="POST" className="form-inline">
                        <div className="form-group">
                            <div className="input-group">
                                <label className="sr-only" htmlFor />
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Task name"
                                    ref="task_menu"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor />
                            <select
                                className="form-control"
                                name="ds"
                                id="inputDs"
                                required
                                ref
                            >
                                <option value={0}> small</option>
                                <option value={1}>medium</option>
                                <option value={2}>high</option>
                            </select>
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary btn-sm"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="btn btn-default btn-sm"
                        >
                            Cancel
                        </button>
                    </form>
                </div>
        );
    }
}

export default FormAdd;
