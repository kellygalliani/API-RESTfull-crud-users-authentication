import { createLoginSchema } from "../schemas/login.schemas"
import { z } from 'zod'

type tLoginRequest = z.infer<typeof createLoginSchema>

export{
    tLoginRequest
}