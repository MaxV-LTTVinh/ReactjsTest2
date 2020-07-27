import React, { Component } from "react";

class Sort extends Component {
constructor(props) {
        super(props);
        this.handleSort = this.handleSort.bind(this);
    }
    handleSort(orderBy, orderDir){
        this.props.onClickSort(orderBy,orderDir)
    }
    render() {
        return (
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="dropdown">
                        <button
                            type="button"
                            className="btn btn-default dropdown-toggle"
                            id="dropdownMenu1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                        >
                            Sort by <span className="caret" />
                        </button>
                        <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenu1"
                        >
                            <li>
                                <a onClick={() => this.handleSort('task','asc')} role="button" className="btn dropdown-item">Name ASC</a>
                            </li>
                            <li>
                                <a onClick={() => this.handleSort('task','desc')} role="button" className="btn dropdown-item">Name DESC</a>
                            </li>
                            <li role="separator" className="dropdown-divider" />
                            <li>
                                <a onClick={() => this.handleSort('level','asc')} role="button" className="btn dropdown-item">Level ASC</a>
                            </li>
                            <li>
                                <a onClick={() => this.handleSort('level','desc')} role="button" className="btn dropdown-item">Level DESC</a>
                            </li>
                        </ul>
                        <span className="label label-success label-medium" />
                    </div>
                </div>
        );
    }
}

export default Sort;
