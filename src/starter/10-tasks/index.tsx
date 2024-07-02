import List from "./List.tsx";
import Form from "./Form.tsx";
import { useEffect, useState } from "react";
import { type task } from "./hooks.ts";

function loadTasks() {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks? JSON.parse(storedTasks) : []
}

loadTasks()

function updateStorage(tasks: task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function Component() {
  const [tasks, setTasks] = useState<task[]>([])
  useEffect(() => {
    updateStorage(tasks)
  }, [tasks])

  const addTask = (task: task) => {
    setTasks([...tasks, task])
  }

  const toggleTask = (id: string) => {
    console.log('触发了')
    tasks.map((task) => {
      if(task.id === id) {
        return {...task, isCompleted: task.isCompleted? false: true}
      }
    })
  }
  return (
    <div>
      <Form addTask={addTask}  />
      <List tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}
export default Component;
