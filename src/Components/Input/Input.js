import { Button, makeStyles, TextField } from '@material-ui/core';
import {React, useState} from 'react';

const Input = ({list, setList}) => {
    const [todo, setTodo] = useState('');
    const useStyle = makeStyles(theme => ({
        input:{
            color: '#50fa7b',
            
        },
        buttonStyle:{ 
            background: '#50fa7b',
            margin: theme.spacing(.5),
        }
    }))
    const classes = useStyle();

    const handleChange = (event) => {
        setTodo(event.target.value);
    }

    const clickFunction = (event) => {
        event.preventDefault();
        setList(list.concat(todo));
        setTodo('');
    }

    return(
        <div>
            <TextField id="todo-input"
                value={todo}
                onChange={handleChange}
                className={classes.input} 
                inputProps={{className:classes.input}}
                InputLabelProps={{className:classes.input}}
                SelectProps={{className:classes.input}}/>
            <Button className={classes.buttonStyle} onClick={clickFunction}>Submit</Button>
        </div>
    )
}

export default Input;