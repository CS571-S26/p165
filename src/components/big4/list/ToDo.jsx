import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, ListGroup, Stack } from "react-bootstrap";

export default function ToDo() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("todo-tasks");
    return stored ? JSON.parse(stored) : [];
  });

  const [recentCompleted, setRecentCompleted] = useState(() => {
    const stored = localStorage.getItem("recent-completed");
    return stored ? JSON.parse(stored) : [];
  });

  const [input, setInput] = useState("");

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
      { id: crypto.randomUUID(), text: input, completed: false }
    ]);

    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const completeTask = (id) => {
    const completedTask = tasks.find(task => task.id === id);

    setRecentCompleted((prev) => {
      const updated = [completedTask, ...prev];
      return updated.slice(0, 5);
    });

    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeAllTasks = () => {
    const completedTasks = tasks.filter((task) => task.completed);
    if (completedTasks.length === 0) return;

    setRecentCompleted((prev) => {
      const updated = [...[...completedTasks].reverse(), ...prev];
      return updated.slice(0, 5);
    });

    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  return (
    <div className="list-background">
      <div className="list-layout">
        <Button className="list-btn" onClick={() => navigate("/")}>
          Back
        </Button>

        <h1 className="mt-3">To-Do List</h1>

        {/* Accessible Form */}
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}
        >
          <Form.Group controlId="taskInput">
            <Form.Label>Add a new task</Form.Label>

            <Stack direction="horizontal" gap={2} className="my-3">
              <Form.Control
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter task"
              />
              <Button type="submit" className="list-btn">
                Add
              </Button>
            </Stack>
          </Form.Group>
        </Form>

        {/* Task List */}
        <ListGroup>
          {tasks.map((task) => {
            const checkboxId = `task-${task.id}`;

            return (
              <ListGroup.Item
                key={task.id}
                className="d-flex justify-content-between align-items-center"
              >
                <Form.Check
                  id={checkboxId}
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  label={task.text}
                />

                <Button
                  className="list-btn"
                  size="sm"
                  disabled={!task.completed}
                  onClick={() => completeTask(task.id)}
                  aria-label={`Complete task: ${task.text}`}
                >
                  Complete
                </Button>
              </ListGroup.Item>
            );
          })}
        </ListGroup>

        <Button
          className="list-btn"
          size="sm"
          onClick={completeAllTasks}
          aria-label="Complete all selected tasks"
        >
          Complete All
        </Button>

        <h2 id="recent-completed-heading">Recently Completed</h2>

        <ListGroup
          className="mt-3"
          aria-labelledby="recent-completed-heading"
        >
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