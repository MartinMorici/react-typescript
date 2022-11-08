import { ReactNode } from "react"
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import './Todos.css'

type AppProps = {
    todos: Todo[];
    children?: ReactNode;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Todos = ( {todos, setTodos}: AppProps) => {
  return (
    <ul className="todos">
        {todos.map((item) => {
            return <TodoItem key={item.id} {...item} todos={todos} setTodos={setTodos}/>
        }) }
    </ul>
  )
}

export default Todos