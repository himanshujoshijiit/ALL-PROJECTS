const express =require("express")
const cors  =require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb+srv://himanj:himanj@cluster0.ngttg.mongodb.net/lrdata?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true
},() =>{
    console.log("DB connect")
})


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User = new mongoose.model("User",userSchema)

//Routes

app.post("/login",(req,res)=>{
    const {email,password} = req.body
    User.findOne({email:email},(err,user) =>{
        if(user){
            if(password===user.password){
                res.send({message:"login successfully"})
            }else{
                res.send({message: "password didn't match"})
            }

        }else{
            res.send({message: "user not registered"})
        }
    })
})
app.post("/register",(req,res)=>{
    
    const {name,email,password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already registered"})
        }
        else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err){
                    res.send(err)
                }else{
                    res.send({ message: "successfully register"})
                }
            })
        }
    })
     
})

app.listen(9002,()=>{
    console.log("be started")
})