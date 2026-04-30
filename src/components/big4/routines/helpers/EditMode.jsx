import EditTaskList from "./EditTaskList";
import AddTaskForm from "./AddTaskForm";

export default function EditMode(props) {
  return (
    <div>
      <AddTaskForm
        newTaskName={props.newTaskName}
        setNewTaskName={props.setNewTaskName}
        newInterval={props.newInterval}
        setNewInterval={props.setNewInterval}
        addTask={props.addTask}
        newStartDate={props.newStartDate}
        setNewStartDate={props.setNewStartDate}
      />

      {props.tasks.length > 0 ? (
        <div>
          <h4>Edit Tasks</h4>
          <EditTaskList 
            tasks={props.tasks} 
            updateTask={props.updateTask}
            deleteTask={props.deleteTask} />
        </div>
      ) : (
        <span>No tasks to edit yet!</span>
      )}
    </div>
  );
}