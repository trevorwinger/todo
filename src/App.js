import './App.css';
import ToDo from './Components/ToDo/ToDo';
import Input from './Components/Input/Input';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {React, useState} from 'react';
function App() {

  const [todos, setTodos] = useState([]);

  const content = () => {
    return(
      <div>
        <ThemeProvider theme={theme}>
          <Input list={todos} setList={setTodos}/>
              {
                todos.map(t => 
                  <ToDo text={t} setList={setTodos} todoList={todos}/>)
              }
        </ThemeProvider>
      </div>
    )
  }

  const theme = createMuiTheme({
    palette:{
      primary:{
          main:'#50fa7b',
      },
  },
  })

  return (
    <div className="App">
      <header className="App-header">
        
          <h1>todos</h1>
          {content()}
      </header>
    </div>
  );
}

export default App;
