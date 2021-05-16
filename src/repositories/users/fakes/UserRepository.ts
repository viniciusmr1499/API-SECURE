import User from '@entities/users/User'
import IUserRepository from '../users/../IUserRepository'
import { IUserPayloadDTO } from '@dtos/users/IUserPayloadDTO'
import { uuid } from 'uuidv4'

export default class UserRepository implements IUserRepository {
  public usersRepository: User[] = []

  async findAll (): Promise<User[]> {
    return this.usersRepository
  }

  async create ({ name, email, password }: IUserPayloadDTO): Promise<User> {
    const user = Object.assign({
      id: uuid(),
      name,
      email,
      password
    })
    this.usersRepository.push(user)
    return user
  }

  async update (userId: string, { name, email, password }: IUserPayloadDTO): Promise<User> {
    const indexUser = this.usersRepository.findIndex((element, index) => {
      if (element.id === userId) {
        return index
      }
    })
    if (indexUser === -1) throw new Error('Index not exists')
    this.usersRepository[indexUser].name = name
    this.usersRepository[indexUser].email = email
    this.usersRepository[indexUser].password = password
    return this.usersRepository[indexUser]
  }

  async delete (userId: string): Promise<void> {
    const indexUser = this.usersRepository.findIndex((element, index) => {
      if (element.id === userId) {
        return index
      }
    })
    if (indexUser === -1) throw new Error('Index not exists')
    this.usersRepository.splice(indexUser, 1)
  }
}
