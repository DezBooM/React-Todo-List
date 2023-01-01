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
        <div className="todo">
            <div className="todo--text">
                <li className={style.title}>{title}</li>
                <p className="time">{format(new Date(time), `HH:mm, dd/MM/yyyy`)}</p>
            </div>
            <div>
                <i  className={`fa-${style.completed} fa-square-check fa-2x`}
                    onClick={handleComplete}
                    onKeyDown={handleComplete}
                    onMouseEnter={() => setCompletedIcon(true)}
                    onMouseLeave={() => setCompletedIcon(false)}
                    />
                <i  className={`fa-${style.hoverIcon} fa-trash-can fa-2x`} 
                    onClick={handleDelete} 
                    onKeyDown={handleDelete}
                    onMouseEnter={() => setHoveredIcon(true)}
                    onMouseLeave={() => setHoveredIcon(false)} />
            </div>
            
        </div>
        
    )
}
