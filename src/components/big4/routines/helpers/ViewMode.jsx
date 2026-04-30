import { Card } from "react-bootstrap";
import TaskList from "./TaskList";
import { useLocation } from "react-router-dom";

export default function ViewMode(props) {
  const location = useLocation();
  
  const isMorning = location.pathname.includes("morning");

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
            className={isMorning ? "morning-routine-card" : "night-routine-card"}
            onClick={() => props.completeSelectedTasks(props.selectedDate)}
          >
            Complete Selected Tasks
          </Card>
        </div>
      )}
    </div>
  );
}