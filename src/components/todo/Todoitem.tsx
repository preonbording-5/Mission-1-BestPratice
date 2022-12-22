import { Todo } from '../../pages/Todo';

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (todoId: number) => void;
  onUpdateTodo: (todoId: number, text: string) => void;
  onCompleteTodo: (todoId: number) => void;
}

const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo, onCompleteTodo }: TodoItemProps) => {
  return (
    <li>
      <span>{todo.id}</span>&nbsp;
      <span>{todo.todo}</span>&nbsp;
      
      <span>{String(todo.isCompleted)}</span>&nbsp;
    </li>
  );
};

export default TodoItem;