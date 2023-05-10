import React, { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import styles from './NewTodo.module.css';
const NewTodo : React.FC = () => {
    const todoCtx = useContext(TodosContext);
    const newTodoInputRef = useRef<HTMLInputElement>(null);
    const addNewTodoHandler = (event : React.FormEvent) => {
        
        event.preventDefault();
        const enteredNewTodo = newTodoInputRef.current!.value

        if(enteredNewTodo.trim().length === 0){
            return;
        }

        todoCtx.addTodo(enteredNewTodo)

        newTodoInputRef.current!.value = '';
    }
    return (
        <form className={styles.form} onSubmit={addNewTodoHandler}>
                <label htmlFor="text">Enter your todo</label>
                <input  type="text" id="text" ref={newTodoInputRef}/>
                <button >Add</button>
        </form>
    )
}

export default NewTodo;