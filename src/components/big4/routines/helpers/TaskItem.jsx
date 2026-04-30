import { useLocation } from "react-router-dom"; 

export default function TaskItem(props) {
  const isSelected = props.selectedTasks?.includes(props.task.id);

  const location = useLocation();
  
  const isMorning = location.pathname.includes("morning");

  const baseClass = isMorning ? "morning-routine-task-card" : "night-routine-task-card";

  return (
    <div
      className={`${baseClass} ${
        isSelected ? "selected" : ""
      }`}
      role="button"
      tabIndex={0}
      onClick={() => props.toggleSelected(props.task.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          props.toggleSelected(props.task.id);
        }
      }}
    >
      <span className="task-text">{props.task.name}</span>
    </div>
  );
}