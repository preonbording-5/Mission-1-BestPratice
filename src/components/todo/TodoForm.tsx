import { useState } from 'react'
import { Todo } from '../../pages/Todo'

interface TodoFormProps {
  onAddTodo: (newTodo: Todo) => void
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState('')

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault()
    const newTodo = {
      id: Date.now(),
      todo,
      isCompleted: false,
      userId: 1,
    }
    onAddTodo(newTodo)
    setTodo('')
  }

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)

  return (
    <form onSubmit={handleAddTodo}>
      <input type='text' value={todo} onChange={handleChangeTodo} />
      <button type='submit' onClick={handleAddTodo} disabled={todo.length < 2}>
        추가
      </button>
    </form>
  )
}

export default TodoForm
