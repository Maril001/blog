import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title:{
        type : String ,
        required : true,
    },
    Image:{
        type : String ,
        required : true,
    },
    header:{
        type : String ,
        required : true,
    },
    description:{
        type : String ,
        required : true,
    },
    author:{
        type : String ,
        required : true,
    },
    date:{
        type : Date ,
        required : true,
    },

})

export default mongoose.models.Post || mongoose.model('Post', postSchema)