import { Todo } from '../../pages/Todo'
import TodoItem from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  onDeleteTodo: (todoId: number) => void
  onUpdateTodo: (todoId: number, text: string) => void
  onCompleteTodo: (todoId: number) => void
}

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo, onCompleteTodo }: TodoListProps) => {
  return (
    <ul>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            todo={item}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
            onCompleteTodo={onCompleteTodo}
          />
        )
      })}
    </ul>
  )
}

export default TodoList
