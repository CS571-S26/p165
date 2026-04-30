import { ListGroup, Row, Col, Form, Card } from "react-bootstrap";

export default function EditTaskItem(props) {
  return (
    <ListGroup.Item>
      <Row>
        <Col>
          <Form.Control
            value={props.task.name}
            onChange={(e) =>
              props.updateTask(props.task.id, "name", e.target.value)
            }
          />
        </Col>

        <Col>
          <Form.Control
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
        </Col>

        <Col xs={4}>
          <Form.Control
            type="date"
            value={props.task.startDate || ""}
            onChange={(e) =>
              props.updateTask(props.task.id, "startDate", e.target.value)
            }
          />
        </Col>

        <Col>
            <Card
                className="morning-routine-card"
                onClick={() => props.deleteTask(props.task.id)}
            >
                Delete
          </Card>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}