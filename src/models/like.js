import mongoose from "mongoose";

const likeSchema = new mongoose.model({
    onModel:{
        type: String,
        required: true,
        enum: ['Tweet', 'Comment']
    },
    likeable:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    user:{
        type: mongoose.Schema.type.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true})

const like = mongoose.model('Like', likeSchema)

export default like