import axios, { AxiosInstance } from 'axios'
import { setInterceptors } from './axiosInterceptors'

const API_DEFAULT_TIMEOUT = 30 * 1000

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop',
  headers: { 'Content-Type': 'application/json' },
  timeout: API_DEFAULT_TIMEOUT,
})

const axiosInstanceWithToken = setInterceptors(axiosInstance)

export { axiosInstance, axiosInstanceWithToken }
