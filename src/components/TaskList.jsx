import React from "react";
import "../component_styles/TaskList.css";
import TaskItem from "./TaskItem";

function TaskList(props) {
  const PlannerDataList = JSON.parse(localStorage.getItem("PlannerDataList"));

  function removeTaskFromList(task_id) {
    PlannerDataList[0].data = PlannerDataList[0].data.filter(function (task) {
      return task.ID !== task_id;
    });
    localStorage.setItem("PlannerDataList", JSON.stringify(PlannerDataList));
    props.access_to_task_list(localStorage.getItem("PlannerDataList"));
    console.log(props.options.task_list);
  }
  return (
    <div className="TaskList">
      {props.options.task_list.map(function (task) {
        return (
          <TaskItem
            task={task}
            key={task.ID}
            delete_action={removeTaskFromList}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
