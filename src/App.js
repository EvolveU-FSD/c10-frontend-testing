import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
    };
    getData();
  }, []);
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <p data-testid="count">Count is {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {todos.map((todo) => {
        return <p data-testid={"todo" + todo.id}>{todo.content}</p>;
      })}
    </div>
  );
}

export default App;
