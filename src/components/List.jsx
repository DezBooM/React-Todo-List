import React from "react"
import TodoList from "./TodoList"

export default function List({ filtered, handleDelete, handleComplete }) {

    return (
        <div>
            <ul>
            {filtered.map(todo => {
                return <TodoList 
                            key={todo.id} 
                            {...todo} 
                            handleDelete={() => handleDelete(todo.id)}
                            handleComplete={() => handleComplete(todo.id)}/>
            })}
            </ul>
        </div>
    )
}