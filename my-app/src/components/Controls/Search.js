import React, { Component } from "react";

class Search extends Component {
    state = {
        strSearch: "",
    };
    clickSearch = () => {
        this.props.onClickSearch(this.state.strSearch);
    };

    clickClear = () => {
        this.setState({
            strSearch: "",
        });
        this.props.onClickSearch("");
    };

    handleChange = (event) => {
        this.setState({ strSearch: event.target.value });
    };
    render() {
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="input-group ">
                    <input
                        type="text"
                        name="strSearch"
                        value={this.state.strSearch}
                        onChange={this.handleChange}
                        className="form-control "
                        placeholder="..."
                    />
                    <span className="input-group-append">
                        <button
                            onClick={this.clickSearch}
                            className="btn btn-info"
                        >
                            Search
                        </button>
                        <button
                            onClick={this.clickClear}
                            className="btn btn-warning"
                        >
                            Clear
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}

export default Search;
