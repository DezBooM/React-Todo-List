import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import List from './components/List'
import toast, { Toaster } from 'react-hot-toast'
import { v4 as uuid } from 'uuid'

function App() {

  const [title, setTitle] = useState("")
  const [status, useStatus] = useState(JSON.parse(localStorage.getItem("status")))
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  const [filtered, setFiltered] = useState([])
  
  const handleStatus = e => useStatus(e.target.value)

  const handleTitle = e => setTitle(e.target.value)

  const handleDelete = id => {
    toast.error("Task deleted successfully",
                 {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff'}} )
    setTodos(prev => {
      return prev.filter(task => task.id !== id)
      } 
    )
  }

  const handleComplete = id => setTodos(prev => prev.map(todo => {
    return todo.id === id ? {...todo, completed:!todo.completed} : todo}))

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos(prev => {
      return [
        {id: uuid(), 
        title,
        completed: false,
        time: new Date().toLocaleString()}
      , ...prev]
    })
    setTitle("")
    toast.success("Task added successfully",
                 {style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff'}} ) 
  }
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    localStorage.setItem("status", JSON.stringify(status))
    switch(status) {
      case "completed": 
        setFiltered(todos.filter(todo => todo.completed))
        break
      case "not completed":
        setFiltered(todos.filter(todo => !todo.completed))
        break
      default:
        setFiltered(todos)
        break
    }
  }, [todos, status])

  return (
    <div className="app">
      <h1>Todo list</h1>
      <Form 
        title = {title}
        handleTitle = {handleTitle}
        status = {status}
        handleStatus = {handleStatus}
        handleSubmit = {handleSubmit}/>
      <List
        filtered = {filtered}
        handleDelete = {handleDelete}
        handleComplete = {handleComplete} />
      <Toaster 
                position="bottom-right"
                reverseOrder={false} />
    </div>
    
  )
}

export default App