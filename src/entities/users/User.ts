import { uuid } from 'uuidv4'

export default class User {
  id: string

  name: string

  email: string

  password: string

  constructor ({ name, email, password }: User) {
    this.id = uuid()
    this.name = name
    this.email = email
    this.password = password
  }
}
