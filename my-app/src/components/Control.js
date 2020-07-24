import React, { Component } from "react";

import Search from "./Controls/Search";
import Sort from "./Controls/Sort";
import FormAdd from "./Controls/FormAdd";
class Control extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Search />
                    <Sort />
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <button
                            type="button"
                            className="btn btn-info btn-block"
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div className="row m-1">
                    <div className="col-md-7" />
                    <FormAdd />
                </div>
            </div>
        );
    }
}

export default Control;
