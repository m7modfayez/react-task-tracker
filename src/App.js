import React, { Component } from 'react';
// import logo from './logo.svg';
import { useState } from 'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App()   {
  const [showAddTask, setShowAddTask] = useState
  (false)

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'doctors appointment',
        day: 'feb 3',
        reminder: false,
    },
    {
        id:2,
        text: 'meeting at school',
        day: 'feb 7',
        reminder: false,
    },
    {
        id:3,
        text: 'shopping',
        day: 'feb 12',
        reminder: false,
    }
])

//add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = {id, ...task}
  setTasks([newTask,...tasks])
  
}

//Delete Task
const deleteTask = (id) => {
  console.log('delete', id);
  setTasks(tasks.filter((task) => task.id !== id))

}

const toggleReminder = (id) => {
  console.log(id);
  setTasks(
    tasks.map((task) =>
    task.id === id ? {...task, reminder: !task.reminder } : task )
  )
}
  
    return (
      <div className="App">
      <div className='container'>
        <Header 
          onAdd={() => setShowAddTask
          (!showAddTask)} 
          showAdd={showAddTask} />

        {showAddTask &&  <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} />) : ('No tasks to show')
        }
      </div>
      </div>
    );
  }



 

export default App;
