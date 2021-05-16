import { Router } from 'express'
import UserController from '../../http/controllers/users/UsersController'

const userRoutes = Router()
const userController = new UserController()

userRoutes.get('/', userController.index)
userRoutes.post('/', userController.create)
userRoutes.put('/', userController.update)
userRoutes.delete('/', userController.delete)

export default userRoutes
