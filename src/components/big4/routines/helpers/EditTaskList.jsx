import { ListGroup } from "react-bootstrap";
import EditTaskItem from "./EditTaskItem";

export default function EditTaskList(props) {
  return (
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
  );
}