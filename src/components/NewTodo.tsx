import React, { useRef } from 'react';
import './NewTodo.css';

type FCProps = {
  addTodo: Function;
}

const NewTodo = ({addTodo} : FCProps) => {
  const todoInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const text = todoInput.current!.value;

    if (text.trim().length === 0) {
      //throw error
      return;
    }

    addTodo(text);
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
