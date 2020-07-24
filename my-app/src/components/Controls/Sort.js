import React, { Component } from "react";

class Sort extends Component {
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
                                <a role="button">Name ASC</a>
                            </li>
                            <li>
                                <a role="button">Name ASC</a>
                            </li>
                            <li role="separator" className="divider" />
                            <li>
                                <a role="button">Name ASC</a>
                            </li>
                            <li>
                                <a role="button">Name ASC</a>
                            </li>
                        </ul>
                        <span className="label label-success label-medium" />
                    </div>
                </div>
        );
    }
}

export default Sort;
