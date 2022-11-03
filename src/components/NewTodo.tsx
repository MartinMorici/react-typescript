import React, { useRef } from 'react';

const NewTodo = () => {
  const todoInput = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const text = todoInput.current!.value;

    if (text.trim().length === 0) {
      //throw error
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={todoInput} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;