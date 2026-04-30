export default function TaskItem({ task, selectedTasks, toggleSelected }) {
  const isSelected = selectedTasks?.includes(task.id);

  return (
    <div
      className={`morning-routine-task-card ${
        isSelected ? "selected" : ""
      }`}
      role="button"
      tabIndex={0}
      onClick={() => toggleSelected(task.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleSelected(task.id);
        }
      }}
    >
      <span className="task-text">{task.name}</span>
    </div>
  );
}