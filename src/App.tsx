import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (text : string) => {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      return prevState.concat(newTodo);
    })
  }

  return (
    <div >
      <NewTodo addTodo={addTodo}/>
      <Todos todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
