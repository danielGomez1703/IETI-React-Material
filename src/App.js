import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import TodoApp from "./components/TodoApp";

class App extends Component {

    constructor(props) {
        super(props);

    }
    render() {

            return (
                <div>
                    <TodoApp />
                </div>
           
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

  

}

export default App;
