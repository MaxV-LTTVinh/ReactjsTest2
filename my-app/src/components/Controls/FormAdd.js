import React, { Component } from "react";

class FormAdd extends Component {
    constructor(props) {
        super(props);
        this.clickClose = this.clickClose.bind(this);
    }
    clickClose(){
        this.props.onClickClose();
    }account
    render() {
        return (
            <div className="col-md-5">
                <form action="" method="POST" className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control input-sm"
                                placeholder="Task name"
                            />
                        </div>
                        <label className="sr-only" htmlFor="" />
                        <select
                            className="form-control input-sm"
                            name="ds"
                            id="inputDs"
                            required
                        >
                            <option value={0}> small</option>
                            <option value={1}>medium</option>
                            <option value={2}>high</option>
                        </select>
                        <button type="button" className="btn btn-primary">
                            Submit
                        </button>
                        {/* <button type="button" className="btn btn-default" onClick={this.clickClose}>
                            Cancel
                        </button> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default FormAdd;
