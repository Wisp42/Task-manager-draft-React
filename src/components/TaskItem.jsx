import React from "react";
import "../component_styles/TaskItem.css";

function TaskItem(props) {
  function deleteTask(event) {
    event.preventDefault();
    props.delete_action(props.task.ID);
  }
  return (
    <div className="TaskItem">
      <div className="TaskInfo">
        <div className="TaskItemTitle">{props.task.title}</div>
        <div className="TaskItemDescription">{props.task.description}</div>
        <div className="TaskItemOptions">
          <input
            type="submit"
            className="delete_task"
            value="Delete"
            onClick={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
