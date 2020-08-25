import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { TodoList } from "../TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Login from "./Login";

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: 0, dueDate: moment() };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="TodoApp">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">TODO React App</h1>
                </header>

                <br />
                <br />
                <form onSubmit={this.handleSubmit} className="todo-form">
                    <h3>New TODO</h3>
                    <label htmlFor="text" className="right-margin">
                        Text:
                    </label>

                    <input
                        id="text"
                        onChange={this.handleChange}
                        value={this.state.text}>
                    </input>

                    <br />
                    <br />
                    <label htmlFor="priority" className="right-margin">
                        Priority:
                    </label>

                    <input
                        id="priority"
                        type="number"
                        onChange={this.handlehange}
                        value={this.state.priority}>
                    </input>
                    <br />
                    <br />

                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleChange}>
                    </DatePicker>
                    <br />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
                <br />
                <br />
                <TodoList todoList={this.state.items} />
                <Login />
            </div>
        );
    }

    handleChange(e) {
        var property = e.target.name
        this.setState({ [property]: e.target.value });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }
}

export default TodoApp;