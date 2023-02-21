import { QueryConfig } from "pg"
import { tLoginRequest } from "../../interfaces/login.interfaces"
import { tUserQueryWithResponse } from '../../interfaces/users.interfaces'
import { client } from '../../database'
import AppError from '../../errors/app.error'
import { compareSync } from "bcryptjs"
import jwt  from "jsonwebtoken"
import 'dotenv/config'

const createLoginServices = async (loginData: tLoginRequest): Promise<string> => {
    
    const queryString: string = `
        SELECT
            *
        FROM 
            users
        WHERE
            email = $1;
        `
    const queryConfig: QueryConfig = {
        text: queryString,
        values: [loginData.email]
    }
    const queryResult: tUserQueryWithResponse = await client.query(queryConfig)
    
    if(queryResult.rowCount === 0){
        throw new AppError('Wrong email/password', 401)
    }
    
    const matchPassword: boolean = compareSync(loginData.password, queryResult.rows[0].password)
    if(!matchPassword){
        throw new AppError('Wrong email/password', 401)
    }

    const token: string = jwt.sign(
        {
          admin: queryResult.rows[0].admin  
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: '24h',
            subject: queryResult.rows[0].id.toString()
        }
    )
    return token
    
}

export default createLoginServices