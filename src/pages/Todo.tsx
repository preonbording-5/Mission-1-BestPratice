import { useState } from 'react';

export interface Todo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const DUMMY_TODOS: Todo[] = [
  {
    id: 1,
    todo: '투두 1',
    isCompleted: false,
    userId: 1,
  },
  {
    id: 2,
    todo: '투두 2',
    isCompleted: true,
    userId: 1,
  },
  {
    id: 3,
    todo: '투두 3',
    isCompleted: false,
    userId: 1,
  },
];

const Todo = () => {
  const [todoData, setTodoData] = useState({
    loading: false,
    todos: DUMMY_TODOS,
    error: null,
  });
  const { loading, todos, error } = todoData;

  if (error) return <div>error</div>;

  return !loading ? (
    <ul>
      {todos.map(({ id, todo, isCompleted }) => (
        <li key={id} style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>
          {todo}
        </li>
      ))}
    </ul>
  ) : (
    <div>loading...</div>
  );
};

export default Todo;
