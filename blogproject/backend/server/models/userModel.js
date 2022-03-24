import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please add your name"],
        trim:true,
        maxlength:[20,"your name upto 20 chars length"]
    },
    account:{
        type:String,
        required:[true,"please add your email or phone"],
        trim:true,
        unique:true
    },
    password:{
      type:String,
      required:[true,"please add your password"],
      trim:true
    },
    type:{
        type:String,
        default:'normal'
    },
},{
    timestamps:true
})


export default mongoose.model('User',userSchema)