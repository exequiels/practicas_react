type Props = {
  children: string
  isComplete?: boolean
}

const TodoList = ({ children, isComplete }: Props) => {
  return (
    <span>
      <input type="checkbox" defaultChecked={isComplete} />
      {children}
    </span>
  )
}

export default TodoList
