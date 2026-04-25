import EditTaskList from "./EditTaskList";
import AddTaskForm from "./AddTaskForm";

export default function EditMode(props) {
  return (
    <div>
      <h4>Add Task</h4>
      <AddTaskForm
        newTaskName={props.newTaskName}
        setNewTaskName={props.setNewTaskName}
        newInterval={props.newInterval}
        setNewInterval={props.setNewInterval}
        addTask={props.addTask}
        newStartDate={props.newStartDate}
        setNewStartDate={props.setNewStartDate}
      />

      <h5>Edit Tasks</h5>
      <EditTaskList 
        tasks={props.tasks} 
        updateTask={props.updateTask}
        deleteTask={props.deleteTask} />
    </div>
  );
}