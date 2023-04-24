import React from "react";
import '../App.css'

 const TodosList = ({todos, setTodos, setEditTodos}) => {

   const handleDelete = ({id}) => {
    setTodos(todos.filter((todos) => todos.id !==id));
   };


   const handleComplete = ({id}) => {
    

     setTodos(todos.map((todos) => {
            if (id === todos.id) {
                
                return { ...todos, completed : !todos.completed };
        }
        
        return todos;
        
    }
   ) )
 } ;

   const handleEdit = ({id}) => {
      const findTodo = todos.find((todos) => todos.id === id);
      setEditTodos(findTodo);
      

   }
   

   return(
   <div>
    {
        todos.map((todos) => (
            <li className="list-item" key={todos.id}>
                <input 
                type="text"
                value={todos.title}
                className = {`list ${todos.completed ? "complete" : "" }`}
                onChange={(event) => event.preventDefault()}
                />
                <button className="button-complete task-button" onClick={() => handleComplete(todos)}>
                    <i className="fa fa-check-circle"></i>comp
                </button>
                <button className="button-edit task-button" onClick={() => handleEdit(todos)}>
                    <i className="fa fa-edit"></i>edit 
                </button>
                <button className="button-delete task-button" onClick={() => handleDelete(todos)}>
                    <i className="fa fa-trash"></i>del
                </button>
                
            </li>
        )
    )}
   </div>
   );
        };
 export default TodosList;