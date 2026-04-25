import { InputGroup, Form, Button } from "react-bootstrap";

export default function AddTaskForm(props) {
  return (
    <InputGroup className="mb-3">
      <Form.Control
        placeholder="Task name"
        value={props.newTaskName}
        onChange={(e) => props.setNewTaskName(e.target.value)}
      />

      <Form.Control
        type="number"
        min={1}
        max={7}
        value={props.newInterval}
        onChange={(e) => props.setNewInterval(Number(e.target.value))}
      />

      <Form.Control
        type="date"
        value={props.newStartDate}
        onChange={(e) => props.setNewStartDate(e.target.value)}
      />

      <Button onClick={props.addTask}>Add</Button>
    </InputGroup>
  );
}