const mongoose = require('mongoose');
const validator = require('validator');

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate : (value)=>{
            const res = validator.isEmail(value);
            if(!res)
            {
                throw new Error("Invalid Email");
            }

        }
    },
    age:{
        type:Number,
        min:0
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }

})


const Reg = new mongoose.model("Reg",registerSchema);

module.exports = Reg;