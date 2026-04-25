import { Button } from "react-bootstrap";
import TaskList from "./TaskList";


export default function ViewMode(props) {
  function toggleSelected(taskId) {
    props.setSelectedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
  }

  return (
    <div>
      <h2>Tasks</h2>
      <TaskList 
        tasks={props.visibleTasks} 
        toggleSelected={toggleSelected}
      />
      <Button
        onClick={() => props.completeSelectedTasks(props.selectedDate)}>
        Complete Selected Tasks
      </Button>
    </div>
  );
}