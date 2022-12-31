import React from "react";

export default function Form({ title, handleStatus, status, handleTitle, handleSubmit }) {
    return (
        <form>
            <input type="text" value={title} onChange={handleTitle} />
            <button onClick={handleSubmit} disabled={!title}>Add</button>
            <select value={status} onChange={handleStatus}>
                <option value="all">All</option>
                <option value="not completed">Not completed</option>
                <option value="completed">Completed</option>
            </select>
        </form>
        
    )
}