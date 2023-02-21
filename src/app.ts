import express, { Application } from 'express'
import 'express-async-errors'
import userRoutes from './routers/users.routes'
import handleError from './errors/handleError'
import loginRoute from './routers/login.routes'

const app: Application = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoute)

app.use(handleError)

export default app