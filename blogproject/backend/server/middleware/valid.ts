import {Request,Response,NextFunction} from 'express'

export const validRegister = async  (req:Request,res:Response,next:NextFunction)=>{
    const {name,account,password} = req.body

    if(!name){
        return res.status(400).json({msg:"please add your name."})
    }else if(name.length>20){
        return res.status(400).json({msg:"your name is up to 20 chars long."})
    }

    if(!account){
        return res.status(400).json({msg:"please add your email pr phone number."})
    }else if(!validPhone(account) && !validateEmail(account)){
        return res.status(400).json({msg:"Email or phone number is incorrect"})
    }

    if(password.length<6){
        return res.status(400).json({msg:"password must be at least 6 lneght"})
    }
}


function validPhone(phone:String){
    const re = /^[+]/g
    return re.test(phone)
}
function validateEmail(email:String) {
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return res.test(String(email).toLowerCase());
  }

}