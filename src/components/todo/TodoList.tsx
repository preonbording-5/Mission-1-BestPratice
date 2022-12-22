import { Todo } from '../../pages/Todo';

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (todoId: number) => void;
  onUpdateTodo: (todoId: number, text: string) => void;
  onCompleteTodo: (todoId: number) => void;
}

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo, onCompleteTodo }: TodoListProps) => {
  return <ul></ul>;
};

export default TodoList;
