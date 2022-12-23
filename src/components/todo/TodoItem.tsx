import { useState } from 'react';
import styled from 'styled-components';
import todoApi, { ITodo } from '../../lib/apis/todoApi';

interface TodoItemProps {
  todo: ITodo;
  onDeleteTodo: (todoId: number) => void;
  onUpdateTodo: (todoId: number, text: string) => void;
  onCompleteTodo: (todoId: number) => void;
}

const TodoItem = ({
  todo: { id, todo, isCompleted, userId },
  onDeleteTodo,
  onUpdateTodo,
  onCompleteTodo,
}: TodoItemProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [text, setText] = useState<string>(todo);

  const handleChangeEdit = () => setEdit((prev) => !prev);

  const onCloseEdit = () => setEdit(false);

  const handleDeleteTodo = () => {
    todoApi
      .deleteTodo(id)
      .then(() => {
        onDeleteTodo(id);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleUpdateTodo = () => {
    todoApi
      .putTodo({ id, todo: text, isCompleted: false, userId })
      .then((res) => {
        onUpdateTodo(res.data.id, res.data.todo);
        onCloseEdit();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleCompleteTodo = () => {
    todoApi.putTodo({ id, todo, isCompleted: !isCompleted, userId }).then((res) => {
      onCompleteTodo(id);
      onCloseEdit();
    });
  };

  return (
    <Item>
      {!edit ? (
        <>
          <Text isCompleted={isCompleted}>{todo}</Text>
          <Button onClick={handleDeleteTodo}>삭제</Button>
          <Button onClick={handleChangeEdit}>수정하기</Button>
        </>
      ) : (
        <EditWrap>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <Button onClick={handleChangeEdit}>수정취소</Button>
          <Button onClick={handleUpdateTodo}>수정완료</Button>
          <Button onClick={handleCompleteTodo}>{isCompleted ? '투두미완료' : '투두완료'}</Button>
        </EditWrap>
      )}
    </Item>
  );
};

export default TodoItem;

const Item = styled.li`
  list-style: none;
`;

const Text = styled.span<{ isCompleted: boolean }>`
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`;

const EditWrap = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 4px;
  margin-right: 2px;
  border: 0;
`;
