import React, { Component } from "react";

import Search from "./Controls/Search";
import Sort from "./Controls/Sort";
class Control extends Component {
    clickAdd = () => {
        this.props.onClickAdd();
    }
    render() {
        let isShowFormAdd = this.props.isShowForm;
        let   elmBtnShowForm = (
                <button
                    type="button"
                    className="btn btn-info btn-block"
                    onClick={this.clickAdd}
                >
                    Add
                </button>
            );
            if(isShowFormAdd){
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
                    <Search onClickSearch={this.props.onClickSearch} />
                    <Sort
                        onClickSort={this.props.onClickSort}
                        orderBy={this.props.orderBy}
                        orderDir={this.props.orderDir}
                    />
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        {elmBtnShowForm}
                    </div>
                </div>
            </div>
        );
    }
}

export default Control;
