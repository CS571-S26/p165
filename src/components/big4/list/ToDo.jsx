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

  const [recentCompleted, setRecentCompleted] = useState(() => {
    const stored = localStorage.getItem("recent-completed");
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState("");

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("recent-completed", JSON.stringify(recentCompleted));
  }, [recentCompleted]);

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

  const completeTask = (index) => {
    const completedTask = tasks[index];

    // Add to recent completed (keep only last 5)
    setRecentCompleted((prev) => {
      const updated = [completedTask, ...prev];
      return updated.slice(0, 5);
    });

    // Remove from active tasks
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completeAllTasks = () => {
      const completedTasks = tasks.filter(task => task.completed);
      if (completedTasks.length === 0) return;

      setRecentCompleted((prev) => {
        const updated = [...completedTasks.reverse(), ...prev];
        return updated.slice(0, 5);
      });

      setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className="list-background">
    <div className="list-layout">
      <Button className="list-btn" onClick={() => navigate("/")}>
        Back
      </Button>

      <h1 className="mt-3">To-Do List</h1>

      {/* Input Row */}
      <Stack direction="horizontal" gap={2} className="my-3">
        <Form.Control
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task"
        />
        <Button className="list-btn" onClick={addTask}>Add</Button>
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
                >
                  {task.text}
                </span>
              }
            />

            <Button
              className="list-btn"
              size="sm"
              disabled={!task.completed}
              onClick={() => completeTask(index)}
            >
              Complete
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button
        className="list-btn"
        size="sm"
        onClick={completeAllTasks}
      >Complete All</Button>
      <h2>Recently Completed</h2>
      <ListGroup className="mt-3">
        {recentCompleted.map((task, index) => (
          <ListGroup.Item key={index}>
            {task.text}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
    </div>
  );
}