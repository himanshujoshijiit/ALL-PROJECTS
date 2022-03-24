import mongoose from 'mongoose'

const URI = process.env.MONGODB_URL

mongoose.connect(`${URI}`,{
     
    useUnifiedTopology: true,
    useCreateIndex:true
},(err) =>{
    if(err) throw err;
    console.log('Mongodb connection')
})