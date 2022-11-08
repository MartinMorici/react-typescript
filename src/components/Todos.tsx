import { useContext } from "react"
import { TodosContext } from "../store/todo-context";
import TodoItem from "./TodoItem";
import './Todos.css'



const Todos = () => {
  const todosCtx = useContext(TodosContext)
  return (
    <ul className="todos">
        {todosCtx.items.map((item) => {
            return <TodoItem key={item.id} {...item}/>
        }) }
    </ul>
  )
}

export default Todos