import React from "react"
import TodoList from "./TodoList"

export default function List({ filtered, handleDelete, handleComplete }) { return (
        <div className="list">
            <ul className={filtered.length === 0 ? "noShadow" : ""}>
            {filtered.length > 0 ? filtered.map(todo => {
                return <TodoList 
                            key={todo.id} 
                            {...todo} 
                            handleDelete={() => handleDelete(todo.id)}
                            handleComplete={() => handleComplete(todo.id)} />
            }) : <p className="noTodo">No todo found.</p>}
            </ul>
        </div>
    )
}