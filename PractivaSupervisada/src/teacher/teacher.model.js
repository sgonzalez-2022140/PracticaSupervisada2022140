import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
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
    role: {
        type: String,
        uppercase: true,
        enum: ['TEACHER'],
        require: true
    }
},{
    versionKey: false
}
)

export default mongoose.model('teacher', teacherSchema)