import { query, Request, Response } from 'express'
import { createUsersService, retriveUsersService, retriveUserProfileService, updateUserService, deleteUserService, activateUserService } from '../services/users/createUsers.services'
import { tUserRequest, tUserUpdateData } from '../interfaces/users.interfaces'

const createUsersController = async (req: Request, res: Response ): Promise<Response> =>{
    const userData: tUserRequest = req.body

    const newUser = await createUsersService(userData)
    return res.status(201).json(newUser)
   
}

const retriveUserController = async (req: Request, res: Response ): Promise<Response> =>{
    const users = await retriveUsersService()
    return res.json(users)
}

const retriveUserProfileController = async (req: Request, res: Response ): Promise<Response> =>{
    const userId: number = req.user.id
    const userProfile = await retriveUserProfileService(userId)
    return res.json(userProfile)
}

const updateUserController = async (req: Request, res: Response ): Promise<Response> =>{
    const userId = parseInt(req.params.id)
    const updateData: tUserUpdateData = req.body
    const updatadedUser = await updateUserService(updateData, userId)
    
    return res.status(201).json(updatadedUser)
}
const deleteUserController = async (req: Request, res: Response ): Promise<Response> =>{
    const userId = parseInt(req.params.id)
    await deleteUserService(userId)
    
    return res.status(204).json()
}
const activateUserController = async (req: Request, res: Response ): Promise<Response> =>{
    const userId = parseInt(req.params.id)
    const userActivated = await activateUserService(userId)
    
    return res.status(201).json(userActivated)
}


export { createUsersController, retriveUserController, retriveUserProfileController, updateUserController, deleteUserController, activateUserController}