'use strict'

import Teacher from '../teacher/teacher.model.js'
import Curse from './curse.model.js'

export const addCurse = async (req, res) => {
    try {
        let data = req.body
        //Validar que si hay un maestro
        let teacher = await Teacher.findOne({ _id: data.teacher})
        if(!teacher) return res.status(404).send({message: 'we need a teacher to create a curse'})
        //crear instnacia de curse
        let curse = new Curse(data)
        //guardar en la bd
        await curse.save()
        //Responder si todo esta bien
        return res.send({message: `You create a new curse called: ${curse.name}`})

    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error adding a curse'})
    }
}
