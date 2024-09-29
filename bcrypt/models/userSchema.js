const mongoose = require('mongoose');
const { Schema } = mongoose;

const goodto= new Schema({
    firstname:{
        type:String,
       
    },
    lastname:{
        type:String,
        
    },
    email:{
        type:String,
        
    },
    password:{
        type:String,
        
    }
})
module.exports=mongoose.model('Username',goodto)