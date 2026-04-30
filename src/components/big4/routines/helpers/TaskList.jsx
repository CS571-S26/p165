import { Container, Row, Col } from "react-bootstrap";
import TaskItem from "./TaskItem";

export default function TaskList(props) {
  if (props.tasks.length === 0) {
    return <p>No tasks for this day</p>;
  }

  return (
    <Container fluid>
      <Row className="g-3">
        {props.tasks.map((task) => (
          <Col
            key={task.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <TaskItem
              task={task}
              selectedTasks={props.selectedTasks}
              toggleSelected={props.toggleSelected}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}