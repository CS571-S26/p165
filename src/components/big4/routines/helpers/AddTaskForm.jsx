import { useState } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";

export default function AddTaskForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleAdd() {
    props.addTask();
    handleClose();
  }

  return (
    <>
      <div className="d-flex justify-content-center mb-3">
        <Card className="morning-routine-card" onClick={handleShow}>
          Add Task
        </Card>
      </div>
      <br></br>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                placeholder="Task name"
                value={props.newTaskName}
                onChange={(e) => props.setNewTaskName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Repeat Interval (days)</Form.Label>
              <Form.Control
                type="number"
                min={1}
                max={7}
                value={props.newInterval}
                onChange={(e) =>
                  props.setNewInterval(Number(e.target.value))
                }
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control
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

          <Card className="morning-routine-card" onClick={handleAdd}>
            Add Task
          </Card>
        </Modal.Footer>
      </Modal>
    </>
  );
}