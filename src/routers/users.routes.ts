import { Router } from 'express'
import { activateUserController, createUsersController, deleteUserController, retriveUserController, retriveUserProfileController, updateUserController } from '../controllers/users.controllers'
import validateToken from '../middlewares/validateToken.middleware'
import verifyReqDataIsValidMid from '../middlewares/verifyReqData.middleware'
import { requestUserSchema } from '../schemas/users.schemas'
import validateIfUserIsAdminMid from '../middlewares/validateIfUserIsAdmin.middleware'
import validateIfUserExistsMid from '../middlewares/validateIfUserExists.middleware'
import { updateUserSchema } from '../schemas/updateUser.schema'
const userRoutes: Router = Router()

userRoutes.post('', verifyReqDataIsValidMid(requestUserSchema), createUsersController)
userRoutes.get('', validateToken, validateIfUserIsAdminMid, retriveUserController)
userRoutes.get('/profile', validateToken, retriveUserProfileController)
userRoutes.patch('/:id', validateToken, validateIfUserExistsMid, verifyReqDataIsValidMid(updateUserSchema), validateIfUserIsAdminMid, updateUserController)
userRoutes.delete('/:id', validateToken, validateIfUserExistsMid, validateIfUserIsAdminMid, deleteUserController)
userRoutes.put('/:id/recover', validateToken, validateIfUserExistsMid, validateIfUserIsAdminMid, activateUserController)

export default userRoutes