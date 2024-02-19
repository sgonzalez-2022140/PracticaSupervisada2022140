'use strict'

import Student from './student.model.js'
import Teacher from '../teacher/teacher.model.js'
import Curse from '../curses/curse.model.js'

export const test = (req, res) =>{
    console.log('test is running')
    return res.send({message: 'Test is running'})
}

export const addStudent = async(req, res)=>{
    try{
        //capturar la info del estudiante
        let data = req.body
        //Validemos que existe un profesor / curso
        let teacher = await Teacher.findOne({ _id: data.teacher})
        if(!teacher) return res.status(404).send({message: 'teacher not found'})
        let curse = await Curse.findOne({ _id: data.curse})
        if(!curse) return res.status(404).send({message: 'curse not found'})
        //crear instancia de student
        let student = new Student(data)
        //Guardar la info
        await student.save()
        //Responder si lo hizo bien
        return res.send({message: 'New student!'})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error adding students'})
    }
}

