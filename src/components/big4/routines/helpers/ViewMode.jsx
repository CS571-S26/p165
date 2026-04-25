import TaskList from "./TaskList";

export default function ViewMode(props) {
  return (
    <div>
      <h2>Tasks</h2>
      <TaskList tasks={props.visibleTasks} />
    </div>
  );
}