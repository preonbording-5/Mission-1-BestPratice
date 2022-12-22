import { Todo } from '../../pages/Todo';

interface TodoFormProps {
  onAddTodo: (todo: Todo) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  return (
    <form>
      <input type='text' />
    </form>
  );
};

export default TodoForm;
