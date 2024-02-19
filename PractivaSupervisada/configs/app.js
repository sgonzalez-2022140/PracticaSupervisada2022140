//Importaciones
import express from 'express'
import { config } from "dotenv"
//rutas de mis clases
//Este importa la info del env

import teacherRoutes from '../src/teacher/teacher.routes.js'
import curseRoutes from '../src/curses/curse.routes.js'
import studentRoutes from '../src/student/student.routes.js'

//Configuraciones
const app = express()
config()
const port = process.env.PORT || 3056

//Confs del servidor
app.use(express.urlencoded({extended: false}))
app.use(express.json())


//Declarar rutas
app.use(teacherRoutes)
app.use('/curse', curseRoutes)
app.use('/student', studentRoutes)

//levantaremos el servidor
export const initServer = ()=>{
    app.listen(port)
    console.log(`Server HTTP running in port ${port}`)
}