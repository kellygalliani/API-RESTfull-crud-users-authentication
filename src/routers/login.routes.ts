import { Router } from 'express'
import createLoginController from '../controllers/login.controller'
import verifyReqDataIsValidMid from '../middlewares/verifyReqData.middleware'
import validateToken from '../middlewares/validateToken.middleware'
import { createLoginSchema } from '../schemas/login.schemas'

const loginRoute: Router = Router()
loginRoute.post('', verifyReqDataIsValidMid(createLoginSchema), createLoginController)


export default loginRoute