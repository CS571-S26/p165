import { ListGroup, Row, Col, Form, Card } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function EditTaskItem(props) {
  const location = useLocation();
  const isMorning = location.pathname.includes("morning");

  const baseClass = isMorning
    ? "morning-routine-card"
    : "night-routine-card";

  return (
    <ListGroup.Item>
      <Row className="align-items-center">
        <Col>
          <Form.Group>
            <Form.Label className="visually-hidden">
              Task Name
            </Form.Label>
            <Form.Control
              aria-label="Task name"
              value={props.task.name}
              onChange={(e) =>
                props.updateTask(props.task.id, "name", e.target.value)
              }
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label className="visually-hidden">
              Repeat Interval (days)
            </Form.Label>
            <Form.Control
              aria-label="Repeat interval in days"
              type="number"
              min={1}
              max={7}
              value={props.task.repeatInterval}
              onChange={(e) =>
                props.updateTask(
                  props.task.id,
                  "repeatInterval",
                  Number(e.target.value)
                )
              }
            />
          </Form.Group>
        </Col>

        <Col xs={4}>
          <Form.Group>
            <Form.Label className="visually-hidden">
              Start Date
            </Form.Label>
            <Form.Control
              aria-label="Start date"
              type="date"
              value={props.task.startDate || ""}
              onChange={(e) =>
                props.updateTask(
                  props.task.id,
                  "startDate",
                  e.target.value
                )
              }
            />
          </Form.Group>
        </Col>

        <Col>
          <Card
            as="button"
            type="button"
            className={baseClass}
            aria-label={`Delete task ${props.task.name}`}
            onClick={() => props.deleteTask(props.task.id)}
          >
            Delete
          </Card>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}