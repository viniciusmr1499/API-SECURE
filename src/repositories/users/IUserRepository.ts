import { IUserPayloadDTO } from '@dtos/users/IUserPayloadDTO'
import User from '@entities/users/User'

export default interface IUserRepository {
  findAll(): Promise<User[]>
  create(data: IUserPayloadDTO): Promise<User>
  update(userId: string, data: IUserPayloadDTO): Promise<User>
  delete(userId: string): Promise<void>
}
