import React, { useState } from "react"
import { type task } from "./hooks"

type propsType = {
    addTask: (task: task) => void
}

function Form({addTask}: propsType) {
    const [text, setText] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!text) {
            alert('please enter a task');
            return;
        }

        addTask({
            id: new Date().getTime().toString(),
            description: text,
            isCompleted: false,
        })

        // clear text
        setText('')
    }
    return (
        <form onSubmit={handleSubmit}>
           <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
           <button type="submit">+</button>
        </form>
    )
}

export default Form