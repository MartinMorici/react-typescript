import { ReactNode } from "react"
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
type AppProps = {
    todos: Todo[];
    children?: ReactNode;
}

const Todos = ( {todos}: AppProps) => {
  return (
    <ul>
        {todos.map((item) => {
            return <TodoItem key={item.id} {...item}/>
        }) }
    </ul>
  )
}

export default Todos