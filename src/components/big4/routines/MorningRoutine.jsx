import { useState, useEffect } from "react";
import { Container, Card, Form, ListGroup, Row, Col } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import { isTaskScheduled } from "./helpers/Schedule";
import ViewMode from "./helpers/ViewMode";
import EditMode from "./helpers/EditMode";

export default function MorningRoutine() {
  const navigate = useNavigate();
  const STORAGE_KEY = "morningTasks";

  function loadTasks() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    try {
      const parsed = JSON.parse(stored);

      return parsed.map((task) => ({
        ...task,
        completed: task.completed || {}, 
      }));
    } catch {
      return [];
    }
  }

  function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }

  const [mode, setMode] = useState("view");

  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [newStartDate, setNewStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [tasks, setTasks] = useState(() => loadTasks());
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const [newTaskName, setNewTaskName] = useState("");
  const [newInterval, setNewInterval] = useState(1);

  const visibleTasks = tasks.filter((task) =>
    isTaskScheduled(task, selectedDate) &&
    !task.completed?.[selectedDate]
  );

  const completedTasks = tasks.filter((task) =>
    isTaskScheduled(task, selectedDate) &&
    task.completed?.[selectedDate]
  );

  function addTask() {
    if (!newTaskName) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: newTaskName,
        repeatInterval: newInterval,
        startDate: newStartDate,
        completed: {},
      },
    ]);

    setNewTaskName("");
    setNewInterval(1);
  }
    
  function completeSelectedTasks(dateKey) {
    const hasValidSelection = tasks.some(
      (task) =>
        selectedTasks.includes(task.id) &&
        isTaskScheduled(task, dateKey)
    );

    if (dateKey !== today && hasValidSelection) {
      const confirmed = window.confirm(
        "You are completing tasks for a different day. Continue?"
      );
      if (!confirmed) return;
    }

    setTasks((prev) =>
      prev.map((task) => {
        if (
          !selectedTasks.includes(task.id) ||
          !isTaskScheduled(task, dateKey)
        ) {
          return task;
        }

        return {
          ...task,
          completed: {
            ...task.completed,
            [dateKey]: true,
          },
        };
      })
    );

    setSelectedTasks([]);
  }
  

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  function updateTask(id, field, value) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, [field]: value } : task
      )
    );
  }

  const isToday = selectedDate === new Date().toISOString().split("T")[0];

  return (
    <div className="morning-routine-background">
    <div className="morning-routine-layout">
      <br></br>
      <Container>
        <Row className="align-items-center">
            <Col xs="auto">
              <Card
                as="button"
                className="morning-routine-card back-card"
                onClick={() => navigate("/")}
              >
                ← Back
              </Card>
            </Col>
          <Col className="text-center">
            <h1 style={{marginLeft: "100px"}}>Morning Routine</h1>
          </Col>
          <Col xs="auto" className="d-flex justify-content-end">
            <Card
              as="button"
              className="morning-routine-card add-card"
              onClick={() =>
                setMode(mode === "view" ? "edit" : "view")
              }
            >
              Switch to {mode === "view" ? "Edit" : "View"}
            </Card>
          </Col>

        </Row>
      </Container>

      {mode === "view" ? (
        <div>
          <span>
            Welcome to your morning routine! Here, tasks you add will repeat at an interval of days that you set.
            You can add tasks by hitting the "Edit Routine" in the top right.  
          </span>
        </div>
      ) : (
        <div>
          <span>
            Here in edit mode, you can add, delete, or modify tasks! Switch back to "View Routine" to interact with them.
          </span>
        </div>
      )}
 
      

      <Form.Group className="mb-3">
        <Form.Label>
          {isToday
            ? "Today"
            : `Preview: ${selectedDate}`}
        </Form.Label>

        <Form.Control
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </Form.Group>

      {mode === "view" ? (
        <Container>
          <ViewMode 
            visibleTasks={visibleTasks}
            selectedDate={selectedDate}
            completeSelectedTasks={completeSelectedTasks}
            selectedTasks={selectedTasks}
            setSelectedTasks={setSelectedTasks}
          />
          <h5 className="mt-4">Completed</h5>

          <ListGroup>
            {completedTasks.map((task) => (
              <ListGroup.Item key={task.id}>
                {task.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      ) : (
        <EditMode
          tasks={tasks}
          updateTask={updateTask}
          newTaskName={newTaskName}
          setNewTaskName={setNewTaskName}
          newInterval={newInterval}
          setNewInterval={setNewInterval}
          addTask={addTask}
          deleteTask={deleteTask}
          newStartDate={newStartDate}
          setNewStartDate={setNewStartDate}
        />
      )}
      <br></br>
    </div>
    </div>
  );
}