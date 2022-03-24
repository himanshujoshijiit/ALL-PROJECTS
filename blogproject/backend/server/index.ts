import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { Console } from 'console'
import routes from './routes/index'


//middleware

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

//ROUTES

 app.use('/api',routes.authRouter)

 //database

 import './config/database'


// server listening

const PORT = process.env.PORT || 5000
app.listen(PORT,() =>{
   console.log('SERVER IS RUUNING ON PORT',PORT)
})
