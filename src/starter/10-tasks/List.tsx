import { task } from "./hooks"

type propsType = {
    tasks: task[],
    toggleTask: (id: string) => void
}

function List({tasks, toggleTask}: propsType) {
    return (
       <ul>
        {tasks.map((task) => {
            return (
                <li key={task.id}>
                    <p>{task.description}</p>
                    <input type="checkBox" onChange={() => toggleTask(task.id)} />
                </li>
            )
        })}
       </ul>
    )
}

export default List