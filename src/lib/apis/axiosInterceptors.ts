import { AxiosInstance } from 'axios'
import { getAccessToken } from './tokenStore'

export const setInterceptors = (axiosInstance: AxiosInstance) =>
  axiosInstance.interceptors.request.use(
    function (config) {
      config.headers!.Authorization = `Bearer ${getAccessToken()}`
      return config
    },
    function (error) {
      return Promise.reject(error)
    },
  )
