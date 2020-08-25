import React from 'react';
import {Todo} from './Todo'
import Box from '@material-ui/core/Box';
export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo key={i} index={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            );
        });

        return (

            <Box color="text.secondary" display="flex" flexWrap="wrap">
                {todoList}
            </Box>
        );


    }

}