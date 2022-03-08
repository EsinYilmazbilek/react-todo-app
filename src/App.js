import React from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { useState } from 'react'


function App() {

  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])

  console.log(inputText)

  const submitTodoHandler = (e) => {
    e.prevent.default
  }

  return (
    <div>
      <header>
        <h1>Find your To Dos here</h1>
      </header>
      <Form setInputText={setInputText}/>
      <TodoList />
    </div>
  )
}

export default App
