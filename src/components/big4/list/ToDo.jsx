import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, ListGroup, Stack, Modal, Card, Container, Row, Col } from "react-bootstrap";

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

  const [showModal, setShowModal] = useState(false);

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
      return updated.slice(0, 4);
    });

    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const hasCompletableTasks = tasks.some(task => task.completed);
  const hasRecentCompleted = recentCompleted.length > 0;

  return (
    <div className="list-background">
      <div className="list-layout">
        <br></br>
        <Container>
          <Row className="align-items-center">

            {/* Left */}
            <Col xs="auto">
              <Card
                as="button"
                className="list-card back-card"
                onClick={() => navigate("/")}
              >
                ← Back
              </Card>
            </Col>

            <Col className="text-center">
              <h1 className="page-title">To-Do List</h1>
            </Col>

            {/* Right */}
            <Col xs="auto" className="d-flex justify-content-end">
              <Card
                as="button"
                className="list-card add-card"
                onClick={() => setShowModal(true)}
              >
                Add Task
              </Card>
            </Col>

          </Row>
        </Container>

        <div>
          <p>
            Welcome to your to-do list! Here, you can add any tasks that you need to track and make sure you complete. Press on a task card to mark it ready for completion. 
            When you're sure you want to complete it, hit the "Complete All Selected" button below!
          </p>
        </div>

        {/* Task List */}
        <Container fluid>
          <Row className="g-3">
            {tasks.map((task) => {

              return (
                <Col
                  key={task.id}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <div
                    className={`task-card list-task-card ${
                      task.completed ? "selected" : ""
                    }`}
                    role="button"
                    tabIndex={0}
                    onClick={() => toggleTask(task.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleTask(task.id);
                      }
                    }}
                  >
                    <span className="task-text">{task.text}</span>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>

        {hasCompletableTasks || tasks.length > 0 ? (
   
          <Card
            as="button"
            className="list-card"
            onClick={completeAllTasks}
            aria-label="Complete all selected tasks"
          >
            Complete Selected Tasks
          </Card>
        

        ) : (
          <p>You have no remaining tasks. To start, hit the "Add Task" button in the top right!</p>
        )}

        {hasRecentCompleted && (
          <Container fluid>
            <h2>Recently Completed</h2>

            <Row className="g-3 mt-3" aria-labelledby="recent-completed-heading">
              {recentCompleted.map((task) => (
                <Col
                  key={task.id || task.text}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                  <div className="task-card completed-task">
                    <span className="task-text">{task.text}</span>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        )}

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Add a Task</Modal.Title>
          </Modal.Header>

          <Form
            onSubmit={(e) => {
              e.preventDefault();
              addTask();
              setShowModal(false);
            }}
          >
            <Modal.Body>
              <Form.Group controlId="taskInput">
                <Form.Label>Task</Form.Label>

                <Form.Control
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter a task"
                  autoFocus
                />
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </Button>

              <Card as="button" className="list-card">
                Add
              </Card>
            </Modal.Footer>
          </Form>
        </Modal>
        <br></br>
      </div>
    </div>
  );
}