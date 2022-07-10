import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseURL: 'http://110.42.184.111'
}

class Http {
  constructor() {
    this.requestInterceptors()
    this.responseInterceptors()
  }

  private static axiosInstance = axios.create(defaultConfig)

  private requestInterceptors(): void {
    Http.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      return config
    }, err => {
      return Promise.reject(err)
    })
  }

  private responseInterceptors(): void {
    Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
      return response
    }, err => {
      return Promise.reject(err)
    })
  }

  public get<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.get(url, params).then(res => res.data).catch()
  }

  public post<T>(url: string, params: AxiosRequestConfig): Promise<T> {
    return Http.axiosInstance.post(url, params).then(res => res.data).catch()
  }
}

export const http = new Http()
