import express from 'express'
//falta el token

//Métodos
import { test, registTeacher, deleteCourseById} from './teacher.controller.js'

const api = express.Router();

//Rutas publicas
api.get('/test', test)
api.post('/registTeacher', registTeacher)
api.delete('/deleteCourseById', deleteCourseById)

export default api