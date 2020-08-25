import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import TodoApp from "./components/TodoApp";
import Login from "./components/Login";
import logo from './logo.svg';


class App extends Component {

   

    render() {
        const LoginView = () => (
            <Login />
        );

        const TodoAppView = () => (
            <TodoApp />
        );
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br />
                    <br />

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView} />
                        <Route path="/todo" component={TodoAppView} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
