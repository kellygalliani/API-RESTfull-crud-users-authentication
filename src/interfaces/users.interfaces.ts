import { QueryResult } from "pg"
import { TypeOf, z } from "zod"
import { userCreatedSchema, requestUserSchema, userWithoutPassword, userListSchema } from '../schemas/users.schemas'
import { updateUserSchema } from '../schemas/updateUser.schema'
type tUserRequest = z.infer<typeof requestUserSchema>
type tUserwithPassword = z.infer<typeof userCreatedSchema>
type tUserResponse = z.infer<typeof userWithoutPassword>
type tUserQueryWithResponse = QueryResult<tUserwithPassword>
type tUserQueryResponse = QueryResult<tUserResponse>  
type tAllUserResponse = z.infer<typeof userListSchema>

type tUserUpdateData = z.infer<typeof updateUserSchema>

export{
    tUserRequest,
    tUserwithPassword,
    tUserResponse,
    tUserQueryResponse,
    tAllUserResponse,
    tUserQueryWithResponse,
    tUserUpdateData
}