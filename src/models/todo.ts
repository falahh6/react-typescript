class Todo{
    id : string;
    item : string;

    constructor(TodoText : string) {
        this.item = TodoText;
        this.id = `${Math.random() * 10}`;
    }
}

export default Todo;