import { http } from '../utils/http'
import { R, RoomListParams } from './interface'

export function getRoomList(params: RoomListParams): Promise<R> {
  return http.get('/api/room/room/getRoomList', params)
}
