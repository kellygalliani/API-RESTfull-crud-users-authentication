import { Request, Response } from 'express'
import createLoginServices from '../services/login/createLogin.services'
import { tLoginRequest } from '../interfaces/login.interfaces'

const createLoginController = async (req: Request, res: Response): Promise<Response> => {
    
    const token = await createLoginServices(req.body) 

    return res.json({
        token: token
    })
}

export default createLoginController