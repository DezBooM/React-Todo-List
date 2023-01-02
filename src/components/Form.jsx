import React from "react"

export default function Form({ title, handleStatus, status, handleTitle, handleSubmit }) {

   const handleEnter = e => {
    if(e.key === "Enter") {
        if (title) {
            handleSubmit(e)
        } else e.preventDefault()
    }
   }

    return (
        <form>
            <div className="inputContainer">
            <input 
                type="text" 
                value={title} 
                onChange={handleTitle} 
                onKeyDown={handleEnter} 
                placeholder="Type here"/>
            {title && <i 
                            className="fa-regular fa-plus" 
                            onClick={handleSubmit}
                            onKeyDown={handleEnter}
                            tabIndex="0"/>}
            </div>
            <select value={status} onChange={handleStatus}>
                <option value="all">All</option>
                <option value="not completed">Not completed</option>
                <option value="completed">Completed</option>
            </select>
        </form> 
    )
}