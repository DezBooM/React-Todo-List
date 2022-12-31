import { format } from "date-fns"
import React from "react"

export default function TodoList({ title, handleComplete, handleDelete, time, completed }) {

    const style = completed ? "completed" : ""

    return (
        <div>
            <li className={style}>{title}</li>
            <p className="time">{format(new Date(time), `p, dd/MM/yyyy`)}</p>
            <button onClick={handleComplete}>Complete</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        
    )
}
