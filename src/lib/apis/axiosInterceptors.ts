import { AxiosInstance } from 'axios'
// import { getAccessToken } from './tokenStore'

export const setInterceptors = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers!.Authorization = `Bearer ${process.env.REACT_APP_TEST_TOKEN}`
      return config
    },
    (error) => Promise.reject(error),
  )
  return axiosInstance
}
