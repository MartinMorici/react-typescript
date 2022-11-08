import './TodoItem.css';
import { useContext } from 'react';
import { TodosContext } from '../store/todo-context';
type TodoItemProps = {
  text: string;
  id: string;
};
const TodoItem = ({ text, id }: TodoItemProps) => {
  const todosCtx = useContext(TodosContext);
  return (
    <li className='item' onClick={() => {todosCtx.removeTodo(id)}}>
      {text}
    </li>
  );
};

export default TodoItem;
