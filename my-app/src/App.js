import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Control from "./components/Control";
import ListTodo from "./components/ListTodo";
import TodoMock from "./mocks/TodoListMock";
import FormAdd from "./components/FormAdd";
 import {orderBy as funcOrderBy} from "lodash";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodoMock: TodoMock.todoList,
            isShowForm: false,
            strSearch: "",
            orderBy: "task",
            orderDir: "asc",
        };
        this.onClickAdd = this.onClickAdd.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handelSort = this.handelSort.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.handelDeleteTodo = this.handelDeleteTodo.bind(this); 
    }
    onClickAdd() {
        this.setState({
            isShowForm: !this.state.isShowForm,
        });
    }

    handleSearch(value) {
        this.setState({
            strSearch: value,
        });
    }
    handelSort(orderBy, orderDir) {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir,
        });
    }

    handelDeleteTodo(id){
        console.log(id);
        this.setState({
            listTodoMock: this.state.listTodoMock.filter(e => e.id !== id)
        })
    }
    
    onClickSubmit(todo){
        let todoList = this.state.listTodoMock;
        const obj = {id: todo.id, level: todo.level,task: todo.task}
        todoList.push(obj);
        this.setState({
            listTodoMock: todoList
        })
        debugger
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
        todoList = funcOrderBy(todoList, [this.state.orderBy], [this.state.orderDir])
        
        let elmForm;
        if (isShowForm) {
            elmForm = <FormAdd onClickClose={this.onClickAdd} onClickSubmit={this.onClickSubmit}/>;
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
                    handelDeleteTodo = {this.handelDeleteTodo}
                    srtSearch={this.props.strSearch}
                />
            </div>
        );
    }
}

export default App;
