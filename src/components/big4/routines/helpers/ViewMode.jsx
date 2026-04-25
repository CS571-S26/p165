import { Button } from "react-bootstrap";
import TaskList from "./TaskList";


export default function ViewMode(props) {
  return (
    <div>
      <h2>Tasks</h2>
      <TaskList 
        tasks={props.visibleTasks} 
      />
      <Button
        onClick={() => props.completeAllTasks(props.selectedDate)}>
        Complete Selected Tasks
      </Button>
    </div>
  );
}