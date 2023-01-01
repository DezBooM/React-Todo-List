import { format } from "date-fns"
import React, { useState } from "react"

export default function TodoList({ title, handleComplete, handleDelete, time, completed }) {

    const [hoveredIcon, setHoveredIcon] = useState(false)
    const [completedIcon, setCompletedIcon] = useState(false)

    const style = {
        title: completed ? "completed" : "",
        hoverIcon: hoveredIcon ? "solid" : "regular",
        completed : completedIcon || completed ? "solid" : "regular"
    }

    return (
        <div>
            <li className={style.title}>{title}</li>
            <p className="time">{format(new Date(time), `HH:mm, dd/MM/yyyy`)}</p>
            <i  className={`fa-${style.completed} fa-square-check`}
                onClick={handleComplete}
                tabIndex="0" 
                onKeyDown={handleComplete}
                onMouseEnter={() => setCompletedIcon(true)}
                onMouseLeave={() => setCompletedIcon(false)}
                 />
            <i  className={`fa-${style.hoverIcon} fa-trash-can`} 
                onClick={handleDelete} 
                tabIndex="0" 
                onKeyDown={handleDelete}
                onMouseEnter={() => setHoveredIcon(true)}
                onMouseLeave={() => setHoveredIcon(false)} />
        </div>
        
    )
}
