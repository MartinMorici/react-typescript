import { ReactNode } from "react"

type AppProps = {
    todos: string[];
    children?: ReactNode;
}

const Todos = ( {todos}: AppProps) => {
  return (
    <ul>
        {todos.map((item) => {
            return <li key={item}>{item}</li>
        }) }
    </ul>
  )
}

export default Todos