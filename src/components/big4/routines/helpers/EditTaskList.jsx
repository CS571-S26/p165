import { ListGroup, Row, Col } from "react-bootstrap";
import EditTaskItem from "./EditTaskItem";

export default function EditTaskList(props) {
  return (
    <>
      <Row className="mb-2 fw-bold text-muted">
        <Col>Task Name</Col>
        <Col>Interval (days)</Col>
        <Col xs={4}>Start Date</Col>
        <Col/>
      </Row>

      <ListGroup className="mb-3">
        {props.tasks.map((task) => (
          <EditTaskItem
            key={task.id}
            task={task}
            updateTask={props.updateTask}
            deleteTask={props.deleteTask}
          />
        ))}
      </ListGroup>
    </>
  );
}