import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Control from "./components/Control";
import ListTodo from "./components/ListTodo";
import FormAdd from "./components/FormAdd";
import { orderBy as funcOrderBy } from "lodash";
const { v4: uuidv4 } = require("uuid");
class App extends Component {

    state = {
        listTodoMock: JSON.parse( localStorage.getItem('task')) || [],
        isShowForm: false,
        strSearch: "",
        orderBy: "task",
        orderDir: "asc",
        todoSelected: null,
    };

    onClickAdd = () => {
        this.setState({
            isShowForm: !this.state.isShowForm,
            todoSelected: null,
        });
    };

    handleSearch = (value) => {
        this.setState({
            strSearch: value,
        });
    };

    handelSort = (orderBy, orderDir) => {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir,
        });
    };

    handelDeleteTodo = (id) => {
        //console.log(id);
        this.setState({
            listTodoMock: this.state.listTodoMock.filter((e) => e.id !== id),
        });
        
        localStorage.setItem("task", JSON.stringify(this.state.todoList));
    };

    onClickSubmit = (todo) => {
        let todoList = this.state.listTodoMock;

        if (todo.id != null && todo.id !== "") {
            todoList.forEach((item) => {
                if (item.id === todo.id) {
                    item.task = todo.task;
                    item.level = todo.level;
                }
            });
        } else {
            todoList.push({ id: uuidv4(), level: +todo.level, task: todo.task });
        }
        this.setState({
            listTodoMock: todoList,
        });

        localStorage.setItem("task", JSON.stringify(todoList));
    };

    handleEditTodo = (todo) => {
        //console.log(todo);
        this.setState({
            todoSelected: todo,
            isShowForm: true,
        });
    };

    componentWillUnmount = () => {
        console.log(this.listTodoMock);
    }

    render() {
        let todoList = this.state.listTodoMock;
        let isShowForm = this.state.isShowForm;
        const strSearch = this.state.strSearch;

        if (strSearch.length > 0) {
            todoList = this.state.listTodoMock.filter((e) =>
                e.task.toLowerCase().includes(strSearch.toLowerCase())
            );
        } else {
            todoList = this.state.listTodoMock;
        }
        todoList = funcOrderBy(
            todoList,
            [this.state.orderBy],
            [this.state.orderDir]
        );

        let elmForm;
        if (isShowForm) {
            elmForm = (
                <FormAdd
                    onClickClose={this.onClickAdd}
                    onClickSubmit={this.onClickSubmit}
                    todoSelected={this.state.todoSelected}
                />
            );
        }
        return (
            <div className="container">
                <Title />
                <Control
                    onClickSearch={this.handleSearch}
                    onClickAdd={this.onClickAdd}
                    onClickSort={this.handelSort}
                    orderBy={this.state.orderBy}
                    orderDir={this.state.orderDir}
                    isShowForm={isShowForm}
                    srtSearch={this.props.strSearch}
                />
                {elmForm}
                <ListTodo
                    todoList={todoList}
                    handelDeleteTodo={this.handelDeleteTodo}
                    onClickEdit={this.handleEditTodo}
                    srtSearch={this.props.strSearch}
                />
            </div>
        );
    }
}

export default App;
