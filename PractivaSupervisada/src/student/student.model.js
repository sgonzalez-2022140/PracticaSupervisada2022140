import mongoose, { Schema } from "mongoose";

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        minLength: [8, 'Password must be 8 characters'],
        required: true
    },
    rol : {
        type: String,
        uppercase: true,
        enum: ['STUDENT'],
        require: true
    },
    teacher: [{
        type: Schema.ObjectId,
        require: true,
        ref: 'teacher'
    }],
    curse: [ {
        type: Schema.ObjectId,
        require: true,
        ref: 'curse',        
    }]

},{
    versionKey: false
}



)



export default mongoose.model('student', studentSchema) 