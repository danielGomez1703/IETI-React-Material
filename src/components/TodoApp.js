import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { TodoList } from "../TodoList";
import DatePicker from 'react-datepicker';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Login from "./Login";

class TodoApp extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: 0, dueDate: moment() };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
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
                  
                    <TextField label="Text" variant="outlined"
                        id="text"
                        name="text"
                        onChange={this.handleChange}
                        value={this.state.text}>
                    </TextField>

                    <br />
                    <br />
                  
                    <TextField label="Priority" variant="outlined" 
                    
                        id="priority"
                        name="priority"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.priority}>
                    </TextField>
                    <br />
                    <br />
                    <label>
                        Select a date for ToDo:
                        <br/>
                        <DatePicker
                            id="due-date"
                            selected={this.state.dueDate}
                            placeholderText="Due date"
                            onChange={this.handleDateChange}
                            selectsRange
                            inline>
                            </DatePicker>   
                     </label>
                    <br />
                    <Button variant="outlined" color="primary">
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>
                <br />
                <br />
                <TodoList todoList={this.state.items} />
            </div>
        );
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleChange(e) {
        var property = e.target.id
        
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
        console.log(newItem);
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: moment()
        }));
    }
}

export default TodoApp;