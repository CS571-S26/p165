import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Button onClick={() => navigate("/lists")}>Back to Lists</Button>

      <h1>To-Do List</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task"
      />
      <Button onClick={addTask}>Add</Button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span>{task.text}</span>
            <Button onClick={() => deleteTask(index)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}