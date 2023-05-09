const NewTodo : React.FC<{}> = (props) => {

    const addNewTodoHandler = (event : any) => {
        event.preventDefault();
        console.log('added')
    }
    return (
        <form action="">
                <label htmlFor="text">Enter your todo</label>
                <input type="text" id="text" />
                <button onClick={addNewTodoHandler}>Add</button>
        </form>
    )
}

export default NewTodo;