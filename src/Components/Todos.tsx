import React from "react";
import Todo from "../models/todo";
import TodoLists from "./TodoLists";
const Todos : React.FC<{items : Todo[]}> = (props) => {
        console.log(props.items);
    return (
       <ul>
        {props.items.map((item)=> <TodoLists key={item.id} text={item.item} />)}
       </ul>
    )
}
export default Todos