import mongoose, { Schema } from "mongoose";

const curseSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    teacher: {
        type: Schema.ObjectId,
        require: true,
        ref: 'teacher'
    }
},{
    versionKey: false
}

)

export default mongoose.model('curse', curseSchema)