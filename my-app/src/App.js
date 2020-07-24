import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Control from "./components/Control";
import ListTodo from "./components/ListTodo";
import TodoMock from "./mocks/TodoListMock";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodoMock: TodoMock.todoList
        };
    }
    render() {
        let todoList = this.state.listTodoMock;
        console.log(todoList);
        return (
            <div className="container">
                <Title />
                <Control />
                <ListTodo todoList={todoList}/>
            </div>
        );
    }
}

export default App;
