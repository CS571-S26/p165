import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, ListGroup, Container, Stack } from "react-bootstrap";

export default function ToDo() {
  const navigate = useNavigate();

  // Load initial state from localStorage
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("todo-tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState("");

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (input.trim() === "") return;

    setTasks([
      ...tasks,
      { text: input, completed: false }
    ]);

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
    <Container className="py-3">
      <Button variant="secondary" onClick={() => navigate("/lists")}>
        Back to Lists
      </Button>

      <h1 className="mt-3">To-Do List</h1>

      {/* Input Row */}
      <Stack direction="horizontal" gap={2} className="my-3">
        <Form.Control
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <Button onClick={addTask}>Add</Button>
      </Stack>

      {/* Task List */}
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <Form.Check
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
              label={
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.text}
                </span>
              }
            />

            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteTask(index)}
            >
              Delete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}