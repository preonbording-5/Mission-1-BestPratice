import { useState } from 'react';
import styled from 'styled-components';
import todoApi, { ITodo } from '../../lib/apis/todoApi';

interface TodoFormProps {
  onAddTodo: (newTodo: ITodo) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState('');

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();
    todoApi
      .postTodo(todo)
      .then((res) => {
        onAddTodo(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
    setTodo('');
  };

  const handleChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value);

  return (
    <TodoFormContainer onSubmit={handleAddTodo}>
      <TodoInput type='text' value={todo} onChange={handleChangeTodo} />
      <button type='submit' onClick={handleAddTodo} disabled={todo.length < 2}>
        추가
      </button>
    </TodoFormContainer>
  );
};

export default TodoForm;

const TodoFormContainer = styled.form`
  width: 100%;
`;

const TodoInput = styled.input`
  /* width: ; */
  border: 0;
  border-bottom: 1px solid black;
  outline: none;
  padding: 4px;
`;
