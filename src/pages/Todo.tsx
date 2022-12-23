import { useState, useEffect } from 'react';
import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';
import todoApi, { ITodo } from '../lib/apis/todoApi';

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
        console.log(err);
        setTodoData((prev) => errorTodoData(prev, err));
      });
  }, []);

  const onAddTodo = (newTodo: ITodo) => {
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
