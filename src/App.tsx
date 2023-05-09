import './App.css';
import NewTodo from './Components/NewTodo';
import Todos from './Components/Todos';
import Todo from './models/todo'
function App() {
  const todos = [
    new Todo('learn React'),
    new Todo('Call friend'),
    new Todo('Thats check')
  ]

  return (
    <div className="App">
      <Todos items={todos} />

      <h1>ADD NEW TODO</h1>
      <NewTodo/>
    </div>
  );
}

export default App;
