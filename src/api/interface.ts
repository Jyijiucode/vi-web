import { AxiosRequestConfig } from 'axios'

export interface R {
  code: string,
  success: boolean,
  message: string,
  result: any,
}

export interface RoomListParams extends AxiosRequestConfig {
  pageNo: number,
  pageSize: number,
  cityCode: string,
}
