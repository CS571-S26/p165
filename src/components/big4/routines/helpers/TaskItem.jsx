import { ListGroup, Form } from "react-bootstrap";

export default function TaskItem(props) {
  return (
    <ListGroup.Item>
      <Form.Check 
        type="checkbox" 
        label={props.task.name} 
        />
    </ListGroup.Item>
  );
}