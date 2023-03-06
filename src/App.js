import TaskList from "./components/TaskList";
import CreateTaskForm from "./components/CreateTaskForm";
import "./styles.css";
import { useState } from "react";

function App() {
  const PlannerDataList = JSON.parse(localStorage.getItem("PlannerDataList"));
  const [currentTaskList, setCurrentTaskList] = useState(checkFirstLaunch());

  function checkFirstLaunch() {
    if (!PlannerDataList) {
      localStorage.setItem(
        "PlannerDataList",
        JSON.stringify([
          { ID: Date.now(), name: "My Tasks", type: "TaskList", data: [] }
        ])
      );
    }
    return PlannerDataList[0].data;
  }

  function accessToTaskList(result) {
    // console.log(JSON.parse(localStorage.getItem("PlannerDataList"))[0].data);

    setCurrentTaskList(result);
    console.log(currentTaskList);
  }

  return (
    <div className="App">
      <TaskList
        access_to_task_list={accessToTaskList}
        options={{ task_list: currentTaskList }}
      />
      <CreateTaskForm
        access_to_task_list={accessToTaskList}
        options={{ task_list: currentTaskList }}
      />
    </div>
  );
}

export default App;
