import React from 'react'

const Todo = ({todo}) => {
  return (
    <div className="todo">
        <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
        </div>
        <div className="bnt-todo">
            <button className="complete">Completar</button>
            <button className="remover">X</button>
        </div>
    </div>

  )
};

export default Todo;