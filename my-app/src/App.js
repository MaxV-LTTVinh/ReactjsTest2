import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Control from "./components/Control";
import ListTodo from "./components/ListTodo";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Title />
                <Control />
                <ListTodo />
            </div>
        );
    }
}

export default App;
