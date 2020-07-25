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
            listTodoMock: TodoMock.todoList,
            isShowForm: false,
            strSearch: "",
        };
        this.onClickAdd = this.onClickAdd.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    onClickAdd() {
        this.setState({
            isShowForm: !this.state.isShowForm,
        });
    }

    handleSearch(value){
        this.setState({
            strSearch: value
        })
    }

    render() {
        let todoList = this.state.listTodoMock;
        //console.log(todoList);
        let isShowForm = this.state.isShowForm;
        
        console.log(this.state.strSearch);
        return (
            <div className="container">
                <Title />
                <Control
                    onClickSearch={this.handleSearch}
                    onClickAdd={this.onClickAdd}
                    isShowForm={isShowForm}
                    srtSearch={this.props.strSearch}
                />
                <ListTodo todoList={todoList} srtSearch={this.props.strSearch}/>
            </div>
        );
    }
}

export default App;
