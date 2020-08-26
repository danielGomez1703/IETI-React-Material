import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { TodoList } from "../TodoList";
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import Login from "./Login";
import Moment from 'react-moment';

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
                        <br />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker autoOk
                                orientation="landscape"
                                variant="static"
                                openTo="date"
                                value={this.state.dueDate}
                                onChange={this.handleDateChange} />
                        </MuiPickersUtilsProvider>
                     </label>
                    <br />
                    <Button type="Submit" variant="outlined" color="primary" >
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
        console.log(); 

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;
        console.log(this.state.dueDate.toDateString());
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate:moment(this.state.dueDate.toDateString()),
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