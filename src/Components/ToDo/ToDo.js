import { Button, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const ToDo = ({text, setList, todoList}) => {
    const useStyle = makeStyles(theme => ({
        root:{
            color: '#50fa7b',
           
        },
        buttonStyle:{ 
            background: '#50fa7b',
            margin: theme.spacing(.5),
        }
    }));
    const deleteTodo = (event) => 
    {
        event.preventDefault();
        let n = [];
        for(var i = 0; i < todoList.length; i++)
        {
            if(todoList[i] !== text)
            {
                n.push(todoList[i]);
            }
        }
        

        setList(n);
    }
    const classes = useStyle();
    return(
        <div>
            <TextField
            disabled
            value={text}
            inputProps={{className:classes.root}}
            InputLabelProps={{className:classes.root}}
            SelectProps={{className:classes.root}}
            />
             <Button className={classes.buttonStyle} onClick={deleteTodo}>Delete</Button>
        </div>
    )
}

export default ToDo;