interface TodoListProps {
  isTrue: boolean
}

const TodoList = (isTrue: TodoListProps) => {
  console.log('isProgramer:', isTrue)
  return (
    <ul>
      <li>to do 1</li>
      <li>to do 2</li>
      <li>to do 3</li>
      <li>to do 4</li>
    </ul>
  )
}

export default TodoList
