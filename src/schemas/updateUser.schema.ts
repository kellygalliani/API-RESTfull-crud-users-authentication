import { hashSync } from 'bcryptjs'
import { z } from 'zod'

const updateUserSchema = z.object({
    name: z.string().max(20).min(3).optional(),
    password: z.string().max(120).transform(pass => hashSync(pass, 10)).optional(),
    email: z.string().max(100).email().optional(),
}).partial()


export { updateUserSchema }