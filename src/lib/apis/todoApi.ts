import { axiosInstanceWithToken } from './axiosInstance';

export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const postTodo = async (todo: string) => {
  const url = '/todos';
  const data = {
    todo,
  };
  const response = await axiosInstanceWithToken.post(url, data);
  return response;
};

const getTodos = async () => {
  const url = '/todos';

  const response = await axiosInstanceWithToken.get(url);
  return response;
};

const putTodo = async (todoItem: ITodo) => {
  const url = `/todos/${todoItem.id}`;
  const data = {
    todo: todoItem.todo,
    isCompleted: todoItem.isCompleted,
  };

  const response = await axiosInstanceWithToken.put(url, data);
  return response;
};

const deleteTodo = async (id: number) => {
  const url = `/todos/${id}`;
  const response = await axiosInstanceWithToken.delete(url);
  return response;
};

export default {
  postTodo,
  getTodos,
  putTodo,
  deleteTodo,
};
