import { useState } from 'react'
import TodoForm from '../components/todo/TodoForm'
import TodoList from '../components/todo/TodoList'

export interface Todo {
  id: number
  todo: string
  isCompleted: boolean
  userId: number
}

interface TodoDataType {
  loading: boolean
  todos: Todo[]
  error: null | Error
}

const DUMMY_TODOS: Todo[] = [
  {
    id: 1,
    todo: '투두1',
    isCompleted: false,
    userId: 1,
  },
  {
    id: 2,
    todo: '투두2',
    isCompleted: true,
    userId: 1,
  },
  {
    id: 3,
    todo: '투두3',
    isCompleted: false,
    userId: 1,
  },
]

const Todo = () => {
  const [todoData, setTodoData] = useState<TodoDataType>({
    loading: false,
    todos: DUMMY_TODOS,
    error: null,
  })

  const { loading, todos, error } = todoData

  // 투두리스트 추가
  const onAddTodo = (newTodo: Todo) => {
    setTodoData((prev) => ({
      ...prev,
      todos: [...prev.todos, newTodo],
    }))
  }

  const onDeleteTodo = (todoId: number) => {
    setTodoData((prev) => ({
      ...prev,
      todos: prev.todos.filter((prevTodo) => prevTodo.id !== todoId),
    }))
  }

  const onUpdateTodo = (todoId: number, text: string) => {
    setTodoData((prev) => ({
      ...prev,
      todos: prev.todos.map((prevTodo) =>
        prevTodo.id === todoId ? { ...prevTodo, todo: text } : prevTodo,
      ),
    }))
  }

  const onCompleteTodo = (todoId: number) => {
    setTodoData((prev) => ({
      ...prev,
      todos: prev.todos.map((prevTodo) =>
        prevTodo.id === todoId ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo,
      ),
    }))
  }

  if (error) return <div>error!</div>

  return !loading ? (
    <div>
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onUpdateTodo={onUpdateTodo}
        onCompleteTodo={onCompleteTodo}
      />
    </div>
  ) : (
    <div>loading...</div>
  )
}

export default Todo
