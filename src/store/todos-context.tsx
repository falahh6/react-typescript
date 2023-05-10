import React, { useState } from "react"
import Todo from "../models/todo"

type todostypeObject = {
    items : Todo[];
    addTodo : (item : string) => void;
    removeTodo : ( id : string) => void
}

export const TodosContext = React.createContext<todostypeObject>({
    items : [],
    addTodo : () => {},
    removeTodo : (id : string) => {}
})

const TodosContextProvider : React.FC<{ children : any}>  = (props) => {
    const [ todos , setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler  = (enteredNewTodo : string) => {
    const newTodo = new Todo(enteredNewTodo);
    setTodos((prevTodos)=> {
      return prevTodos.concat(newTodo);
    });
  }
  const onDeleteTodoHandler = (todoId : string) => {
    setTodos((prevTodos)=> {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  const contextValue : todostypeObject = {
    items : todos,
    addTodo : onAddTodoHandler,
    removeTodo : onDeleteTodoHandler
  }
    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider;