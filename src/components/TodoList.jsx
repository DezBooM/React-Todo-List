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

    const handleEnterDelete = e => {
        if(e.key === "Enter") {
            handleDelete()
        }
    }

    const handleEnterComplete = e => {
        if(e.key === "Enter") {
            handleComplete()
        }
    }

    return (
        <div className="todo">
            <div className="todo--text">
                <li className={style.title}>{title}</li>
                <p className="time">{format(new Date(time), `HH:mm, dd/MM/yyyy`)}</p>
            </div>
            <div className="icons">
                <i  className={`fa-${style.completed} fa-square-check fa-lg`}
                    onClick={handleComplete}
                    onKeyDown={handleEnterComplete}
                    onMouseEnter={() => setCompletedIcon(true)}
                    onMouseLeave={() => setCompletedIcon(false)}
                    tabIndex="0" />
                <i  className={`fa-${style.hoverIcon} fa-trash-can fa-lg`} 
                    onClick={handleDelete} 
                    onKeyDown={handleEnterDelete}
                    onMouseEnter={() => setHoveredIcon(true)}
                    onMouseLeave={() => setHoveredIcon(false)}
                    tabIndex="0" />
            </div>
        </div>
        
    )
}
