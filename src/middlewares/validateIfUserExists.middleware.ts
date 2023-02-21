import { NextFunction, Request, Response } from 'express';
import { QueryConfig } from 'pg';
import AppError from '../errors/app.error';
import { client } from '../database'

const validateIfUserExistsMid = async (req: Request, res: Response, next: NextFunction) =>{
    const id: number = parseInt(req.params.id)
    
    const queryString: string = `
        SELECT 
            * 
        FROM 
            users 
        WHERE id = $1;
    `;
    const queryConfig: QueryConfig = {
        text: queryString,
        values: [id]
    };
    const queryResult = await client.query(queryConfig)

    if (!queryResult.rowCount) {
        throw new AppError("User not found", 404)
    }
    
    return next()
}
export default validateIfUserExistsMid