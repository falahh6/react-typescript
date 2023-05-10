import React from "react";
import styles from './TodoLists.module.css';

const TodoLists:React.FC<{text: string; onDelete : () => void}> =  (props) => {
    return ( <li onDoubleClick={props.onDelete} className={styles.item}>{props.text}</li>)
}
export default TodoLists;