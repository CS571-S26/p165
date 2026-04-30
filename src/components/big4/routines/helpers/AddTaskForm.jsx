import { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function AddTaskForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const isMorning = location.pathname.includes("morning");

  const baseClass = isMorning
    ? "morning-routine-card"
    : "night-routine-card";

  function handleAdd() {
    props.addTask();
    handleClose();
  }

  return (
    <>
      {/* Trigger */}
      <div className="d-flex justify-content-center mb-3">
        <Card
          as="button"
          type="button"
          className={baseClass}
          aria-label="Open add task modal"
          onClick={handleShow}
        >
          Add Task
        </Card>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            {/* Task Name */}
            <Form.Group className="mb-3">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                aria-label="Task name"
                placeholder="Enter task name"
                value={props.newTaskName}
                onChange={(e) => props.setNewTaskName(e.target.value)}
              />
            </Form.Group>

            {/* Repeat Interval */}
            <Form.Group className="mb-3">
              <Form.Label>Repeat Interval (days)</Form.Label>
              <Form.Control
                aria-label="Repeat interval in days"
                type="number"
                min={1}
                max={7}
                value={props.newInterval}
                onChange={(e) =>
                  props.setNewInterval(Number(e.target.value))
                }
              />
            </Form.Group>

            {/* Start Date */}
            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                aria-label="Start date"
                type="date"
                value={props.newStartDate}
                onChange={(e) =>
                  props.setNewStartDate(e.target.value)
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Card className={baseClass} onClick={handleAdd}>
            Add Task
          </Card>
        </Modal.Footer>
      </Modal>
    </>
  );
}