import { Request, Response } from 'express'

export default class UsersController {
  public async index (request: Request, response: Response): Promise<any> {
    try {
      return response.json({
        message: 'TODO - implement method [index]'
      })
    } catch (error) {
      console.log(error.message())
    }
  }

  public async create (request: Request, response: Response): Promise<any> {
    try {
      return response.json({
        message: 'TODO - implement method [create]'
      })
    } catch (error) {
      console.log(error.message())
    }
  }

  public async update (request: Request, response: Response): Promise<any> {
    try {
      return response.json({
        message: 'TODO - implement method [update]'
      })
    } catch (error) {
      console.log(error.message())
    }
  }

  public async delete (request: Request, response: Response): Promise<any> {
    try {
      return response.json({
        message: 'TODO - implement method [delete]'
      })
    } catch (error) {
      console.log(error.message())
    }
  }
}
