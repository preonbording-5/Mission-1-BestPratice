import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';
import todoApi, { ITodo } from '../lib/apis/todoApi';
import { getAccessToken } from '../lib/utils/AcessTokenStore';

interface TodoDataType {
  loading: boolean;
  todos: ITodo[];
  error: null | Error;
}

const initialTodoData = {
  loading: false,
  todos: [],
  error: null,
};

const loadingTodoData = (prev: TodoDataType) => ({
  ...prev,
  loading: true,
});

const successTodoData = (prev: TodoDataType, todos: ITodo[]) => ({
  ...prev,
  loading: false,
  todos,
});

const errorTodoData = (prev: TodoDataType, error: Error) => ({
  ...prev,
  loading: false,
  error,
});

const Todo = () => {
  const navigate = useNavigate();
  const [todoData, setTodoData] = useState<TodoDataType>(initialTodoData);
  const { loading, todos, error } = todoData;

  useEffect(() => {
    setTodoData((prev) => loadingTodoData(prev));
    todoApi
      .getTodos()
      .then((res) => {
        setTodoData((prev) => successTodoData(prev, res.data));
      })
      .catch((err) => {
        setTodoData((prev) => errorTodoData(prev, err));
      });
  }, []);

  const onAddTodo = (newTodo: ITodo) => {
    setTodoData((prev) => ({
      ...prev,
      todos: [...prev.todos, newTodo],
    }));
  };

  const onDeleteTodo = (todoId: number) => {
    setTodoData((prev) => ({
      ...prev,
      todos: prev.todos.filter((prevTodo) => prevTodo.id !== todoId),
    }));
  };

  const onUpdateTodo = (todoId: number, text: string) => {
    setTodoData((prev) => ({
      ...prev,
      todos: prev.todos.map((prevTodo) =>
        prevTodo.id === todoId ? { ...prevTodo, todo: text } : prevTodo,
      ),
    }));
  };

  const onCompleteTodo = (todoId: number) => {
    setTodoData((prev) => ({
      ...prev,
      todos: prev.todos.map((prevTodo) =>
        prevTodo.id === todoId ? { ...prevTodo, isCompleted: !prevTodo.isCompleted } : prevTodo,
      ),
    }));
  };

  useEffect(() => {
    if (!getAccessToken()) {
      navigate('/');
    }
  }, [navigate]);

  if (error) return <div>error!</div>;

  return !loading ? (
    <TodoContainer>
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onUpdateTodo={onUpdateTodo}
        onCompleteTodo={onCompleteTodo}
      />
    </TodoContainer>
  ) : (
    <div>loading...</div>
  );
};

export default Todo;

const TodoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
