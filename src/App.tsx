
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
function App() {

  const todoItems = [
    new Todo('Learn React'),
    new Todo('Learn TypeScript'),
  ];

  return (
    <div >
      <Todos todos={todoItems}/>
      <NewTodo/>
    </div>
  );
}

export default App;
