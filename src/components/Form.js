import React from 'react'
import { BsPlusLg } from 'react-icons/bs'


function Form(props) {

  const inputTextHandler = (e) => {
    console.log(e.target.value)
    props.setInputText(e.target.value)
  }

  return (
    <form>
      <input className="todo-input" type="text" onChange={inputTextHandler}/>
      <button className="todo-button" type="submit">
        <i className="bsplus"><BsPlusLg /></i>
      </button>
      <div className="select">
        <select className="filter-todo" name="todos">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="working-on">Working On</option>
          <option value="working-on">Will Work On</option>
        </select>
      </div>
    </form>
  )
}

export default Form