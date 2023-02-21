import { QueryConfig } from "pg"
import format from "pg-format"
import { client } from "../../database"
import AppError from "../../errors/app.error"
import { tAllUserResponse, tUserQueryResponse, tUserRequest, tUserResponse, tUserUpdateData} from "../../interfaces/users.interfaces"
import { userListSchema, userWithoutPassword } from "../../schemas/users.schemas"

const createUsersService = async (userData:tUserRequest): Promise<tUserResponse> =>{
   
    const verifyIfEmailExistsQueryString = `
        SELECT *
        FROM users
        WHERE "email" = $1
    `
    const verifyIfEmailExistsQueryConfig: QueryConfig = {
        text: verifyIfEmailExistsQueryString,
        values: [userData.email]
    }
    const resultVerifyIfEmailExistsQueryString = await client.query(verifyIfEmailExistsQueryConfig)
   
    if(resultVerifyIfEmailExistsQueryString.rowCount > 0){
        throw new AppError('E-mail already registered', 409)
    }

    const querString: string = format(
        `
            INSERT INTO
                users(%I)
            VALUES (%L)
            RETURNING *;
        `,
        Object.keys(userData),
        Object.values(userData)
    )
    const querResult: tUserQueryResponse = await client.query(querString)
    const newUser: tUserResponse = userWithoutPassword.parse(querResult.rows[0])
    return newUser
}

const retriveUsersService = async (): Promise<tAllUserResponse> =>{
    const queryString: string = `
        SELECT 
            * 
        FROM 
            users;
    `
    const queryResult: tUserQueryResponse = await client.query(queryString)
    const allUsers: tAllUserResponse = userListSchema.parse(queryResult.rows)
    return allUsers
}

const retriveUserProfileService = async (userId:number): Promise<tUserResponse> => {
    const querString: string = `
        SELECT
            *
        FROM
            users
        WHERE "id" = $1;
    `
    const queryConfig: QueryConfig = {
        text: querString,
        values: [userId]
    }
    const queryResult: tUserQueryResponse = await client.query(queryConfig)
    const userProfile: tUserResponse = userWithoutPassword.parse(queryResult.rows[0])
    return userProfile
}

const updateUserService = async (updateData: tUserUpdateData, userId: number): Promise<tUserResponse> =>{
    
    const queryString = format(
        `
            UPDATE users
            SET(%I) = ROW(%L)
            WHERE
                id = $1
            RETURNING *;
        `,
        Object.keys(updateData),
        Object.values(updateData)
    )
    const queryConfig = {
        text: queryString,
        values: [userId]
    }
    const queryResult: tUserQueryResponse = await client.query(queryConfig)
    const updatedUser: tUserResponse = userWithoutPassword.parse(queryResult.rows[0])

    return updatedUser
}
const deleteUserService = async (userId: number): Promise<tUserResponse> =>{
    
    const queryString = format(
        `
            UPDATE users
            SET(active) = ROW(false)
            WHERE
                id = $1
            RETURNING *;
        `
    )
    const queryConfig = {
        text: queryString,
        values: [userId]
    }
    const queryResult: tUserQueryResponse = await client.query(queryConfig)

    return queryResult.rows[0]
}
const activateUserService = async (userId: number): Promise<tUserResponse> =>{
    let queryString = `
        SELECT
            *
        FROM 
            users
        WHERE
            "id" = $1;
    `
    let queryConfig: QueryConfig = {
        text: queryString,
        values: [userId]
    }
    let queryResult = await client.query(queryConfig)
    if(queryResult.rows[0].active){
        throw new AppError('User already active', 400)
    }

    queryString = format(
        `
            UPDATE users
            SET(active) = ROW(true)
            WHERE
                id = $1
            RETURNING *;
        `
    )
    queryConfig = {
        text: queryString,
        values: [userId]
    }
    queryResult = await client.query(queryConfig)
    const userActivated = userWithoutPassword.parse(queryResult.rows[0])
    return userActivated
}

export { createUsersService, retriveUsersService, retriveUserProfileService, updateUserService, deleteUserService, activateUserService }