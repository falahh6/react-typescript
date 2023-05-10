import React, { useContext} from "react";
import TodoLists from "./TodoLists";
import styles from './Todos.module.css';
import { TodosContext } from "../store/todos-context";
const Todos : React.FC= () => {
  const todoCtx = useContext(TodosContext);

    return (
       <ul className={styles.todos}>
        {todoCtx.items.map((item)=> <TodoLists onDelete={todoCtx.removeTodo.bind(null,  item.id)} key={item.id} text={item.item} />)}
       </ul>
    )
}
export default Todos;