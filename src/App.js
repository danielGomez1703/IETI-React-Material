import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import TodoApp from "./components/TodoApp";
import Login from "./components/Login";
import logo from './logo.svg';


localStorage.setItem("mail", "prueba@gmail.com");
localStorage.setItem("password", "prueba1234");


class App extends Component {
    
    constructor(props) {
    
        super(props);
        this.state = { isLogged: false };
        this.handleClick = this.handleClick.bind(this);
    }



    render() {

        const LoginView = () => (
            <Login handleClick={this.handleClick} />
        );

        const TodoAppView = () => (
            <TodoApp />
        );

        const view = this.state.isLogged ? TodoAppView : LoginView
        
        return (


            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br />
                    <br />
                       
                        <Route exact path="/" component={view} />
                    
                    </div>
                     </Router>
           
        );
    
    }

    handleClick(e) {
        this.setState({ isLogged: true })
    }


}

export default App;
