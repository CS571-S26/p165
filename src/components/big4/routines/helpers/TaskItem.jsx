import { ListGroup, Form } from "react-bootstrap";

export default function TaskItem(props) {
  return (
    <ListGroup.Item>
      <Form.Check 
        type="checkbox" 
        label={props.task.name}
        checked={props.selectedTasks?.includes(props.task.id)}
        onChange={() => props.toggleSelected(props.task.id)}
        />
    </ListGroup.Item>
  );
}