'use strict'

import { Router } from "express"
import {
    addStudent
} from './student.controller.js'

const api = Router()

api.post('/addStudent', addStudent)

export default api