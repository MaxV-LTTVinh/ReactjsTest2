import React, { Component } from "react";

import Search from "./Controls/Search";
import Sort from "./Controls/Sort";
import FormAdd from "./Controls/FormAdd";
class Control extends Component {
    constructor(props) {
        super(props);
        this.clickAdd = this.clickAdd.bind(this);
    }
    clickAdd() {
        this.props.onClickAdd();
    }
    render() {
        let isShowFormAdd = this.props.isShowForm;
        let elmForm,
            elmBtnShowForm = (
                <button
                    type="button"
                    className="btn btn-info btn-block"
                    onClick={this.clickAdd}
                >
                    Add
                </button>
            );
        if (isShowFormAdd) {
            elmForm = <FormAdd onClickClose={this.clickAdd}/>;
            elmBtnShowForm = (
                <button
                    type="button"
                    className="btn btn-success btn-block"
                    onClick={this.clickAdd}
                >
                    Close
                </button>
            );
        }

        return (
            <div>
                <div className="row">
                    <Search onClickSearch={this.props.onClickSearch}/>
                    <Sort />
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        {elmBtnShowForm}
                    </div>
                </div>
                <div className="row m-1">
                    <div className="col-md-7" />
                    {elmForm}
                </div>
            </div>
        );
    }
}

export default Control;
