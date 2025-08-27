import { useState } from 'react'

const Todos = () => {
  const [todos, setTodos] = useState([
    { text: '1', checked: false },
    { text: '2', checked: false },
  ])
  const [inputValue, setInputValue] = useState('')

  const deleteTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index))
  }

  const handleAddTodos = () => {
    if (inputValue.trim() === '') return
    setTodos((prev) => [...prev, { text: inputValue, checked: false }])
    setInputValue('')
  }

  const handleCheckBox = (index: number) => {
    setTodos((prev) =>
      prev.map((t, i) => (i === index ? { ...t, checked: !t.checked } : t))
    )
  }

  return (
    <>
      <div>
        <ul id="list">
          {todos.map((todo, index) => (
            <li className="list-item" key={index}>
              <label className="list-item-label">
                <input
                  type="checkbox"
                  checked={todo.checked}
                  onChange={() => handleCheckBox(index)}
                />
                <span
                  data-list-item-text
                  style={{
                    textDecoration: todo.checked ? 'line-through' : 'none',
                  }}
                >
                  {todo.text}
                </span>
              </label>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          id="todo-input"
        />
        <button onClick={handleAddTodos}>Add Todo</button>
      </div>
    </>
  )
}

export default Todos
