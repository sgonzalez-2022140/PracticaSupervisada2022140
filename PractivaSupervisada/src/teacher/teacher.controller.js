'use strict'

import Teacher from './teacher.model.js'
import Course from '../curses/curse.model.js'


export const test = (req, res) =>{
    console.log('test is running')
    return res.send({message: 'Test is running'})
}

export const registTeacher = async(req, res)=>{
    try{
        //capturamos la info
        let data = req.body
        //le daremos el rol de maestro por defecto
        data.role = 'TEACHER'
        //Guardar en la bd
        let teacher = new Teacher(data)
        await teacher.save()
        //mensaje de que se guardo exitosamente
        return res.send({message: `Register successfully, can be logged with email use ${teacher.username}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error registering teacher', err: err})
    }
}

export const deleteCourseById = async (req, res) => {
    try{
        const courseId = req.params.courseId;
        // Busca el curso en la base de datos por ID
        const course = await Course.findById(courseId);
        if (!course) return res.status(404).send({message: 'curse not found'})
        //Eliminamos
        await course.remove();
        //mensaje
        return res.send({ message: 'Course deleted successfully' });
    }catch(err){
        console.error(err);
        return res.status(500).send({ message: 'Error deleting course'});
    }
}

/*
export const loginTeacher = async(req, res)=>{
    try{
        //capturar la info del profesor (por username y password)
        let {username, password} = req.body
        //Validar que si existe
        let teacher = await Teacher.findOne({username: username})
        //Verificar que coincida la contraseña

        //Decir que ingreso 
        return res.send({message: `Welcome ${teacher.name}`})
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error to log in your account'})
    }
}*/