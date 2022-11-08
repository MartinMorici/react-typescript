import React, { useRef, useContext } from 'react';
import { TodosContext } from '../store/todo-context';
import './NewTodo.css';


const NewTodo = () => {
  const todosCtx = useContext(TodosContext)
  const todoInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const text = todoInput.current!.value;

    if (text.trim().length === 0) {
      //throw error
      return;
    }

    todosCtx.addTodo(text);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
