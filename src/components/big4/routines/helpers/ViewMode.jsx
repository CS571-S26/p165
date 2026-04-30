import { Card } from "react-bootstrap";
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
        selectedTasks={props.selectedTasks}
      />
      <br></br>
      {props.visibleTasks.length > 0 && (
        <div className="d-flex justify-content-center mt-3">
          <Card
            as="button"
            className="morning-routine-card complete-button"
            onClick={() => props.completeSelectedTasks(props.selectedDate)}
          >
            Complete Selected Tasks
          </Card>
        </div>
      )}
    </div>
  );
}