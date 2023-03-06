import React, { useState } from "react";
import "../component_styles/CreateTaskForm.css";
import Task from "../Task";

function CreateTaskForm(props) {
  const PlannerDataList = JSON.parse(localStorage.getItem("PlannerDataList"));
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function buildTask(event) {
    event.preventDefault();
    PlannerDataList[0].data = [
      ...PlannerDataList[0].data,
      new Task({
        title: title,
        description: description,
        listID: props.list_ID
      })
    ];
    localStorage.setItem("PlannerDataList", JSON.stringify(PlannerDataList));
    props.access_to_task_list(PlannerDataList[0].data);
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <div className="CreateTaskForm">
        <div className="CreateTaskTitleWrapper">
          <input
            type="text"
            className="CreateTaskTitle"
            placeholder="Enter task title..."
            value={title}
            onChange={function (event) {
              event.preventDefault();
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="CreateTaskDescriptionWrapper">
          <textarea
            className="CreateTaskDescription"
            placeholder="Enter task description..."
            value={description}
            onChange={function (event) {
              event.preventDefault();
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>
        <div className="SendTaskDataWrapper">
          <input
            type="submit"
            value="Send"
            className="SendTaskData"
            onClick={buildTask}
          />
        </div>
      </div>
    </>
  );
}

export default CreateTaskForm;
