import { ITodo } from '../../lib/apis/todoApi';

interface TodoItemProps {
  todo: ITodo;
  onDeleteTodo: (todoId: number) => void;
  onUpdateTodo: (todoId: number, text: string) => void;
  onCompleteTodo: (todoId: number) => void;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li>
      <span>{todo.id}</span>&nbsp;
      <span>{todo.todo}</span>&nbsp;
      <span>{String(todo.isCompleted)}</span>&nbsp;
    </li>
  );
};

export default TodoItem;
