import React, {useState} from 'react';
import './App.css';
import Header from './components/header';
import Form from './components/form';
import TodosList from './components/TodosList';


const App = () => {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodos, setEditTodos] = useState(null);
  
  return (

    <div className='container'> 
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form 
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodos={editTodos}
            setEditTodos={setEditTodos}
          
          />
        </div>
        <div>
          <TodosList 
             todos={todos} 
             setTodos={setTodos} 
            
            setEditTodos={setEditTodos}
          />
        </div>
      </div>
    </div>
    

    
  )
}

export default App;  
