import { axiosInstance } from './axiosInstance'

interface IUser {
  email: string
  password: string
}

const postSignUp = async (user: IUser) => {
  const url = '/auth/signup'
  const data = {
    email: user.email,
    password: user.password,
  }

  const response = await axiosInstance.post(url, data)

  return response
}

const postSignIn = async (user: IUser) => {
  const url = '/auth/signin'
  const data = {
    email: user.email,
    password: user.password,
  }

  const response = await axiosInstance.post(url, data)
  return response
}

export default {
  postSignUp,
  postSignIn,
}
