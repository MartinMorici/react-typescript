import React from 'react'
import Todo from '../models/todo';
import './TodoItem.css'


type TodoItemProps = {
    text: string;
    id: string;
    todos: Todo[];
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem = ({text, id, todos, setTodos}: TodoItemProps) => {

  const removeTodo = () => {
    const newArray = todos.filter(todo => todo.id !== id)  
    setTodos(newArray);
  }
  
  return (
    <li className='item' onClick={removeTodo}>{text}</li>
  )
}

export default TodoItem