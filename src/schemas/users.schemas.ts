import { hashSync } from 'bcryptjs'
import { z } from 'zod'

const  requestUserSchema = z.object({
    name: z.string().max(20).min(3),
    email: z.string().max(100).email(),
    password: z.string().max(120).transform(pass => hashSync(pass, 10)),
    admin: z.boolean().default(false).optional()
})
const userCreatedSchema = requestUserSchema.extend({
    id:z.number(),
    active: z.boolean().default(true)
})

const userWithoutPassword = userCreatedSchema.omit({password: true})

const userListSchema = z.array(userWithoutPassword)

export { requestUserSchema, userCreatedSchema, userWithoutPassword, userListSchema }