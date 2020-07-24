import React, { Component } from "react";

import Search from "./Control/Search";
import Sort from "./Control/Sort";
import FormAdd from "./Control/FormAdd";
class Control extends Component {
    render() {
        return (
            <div className="row">
                <Search/>
                <Sort/>
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <button type="button" className="btn btn-info btn-block">
                        Add
                    </button>
                </div>
                <div className="col-md-7" />
                <FormAdd/>
            </div>
        );
    }
}

export default Control;
