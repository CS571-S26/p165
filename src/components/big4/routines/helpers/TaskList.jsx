import { ListGroup } from "react-bootstrap";
import TaskItem from "./TaskItem";

export default function TaskList(props) {
  if (props.tasks.length === 0) {
    return <p>No tasks for this day</p>;
  }

  return (
    <ListGroup>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ListGroup>
  );
}