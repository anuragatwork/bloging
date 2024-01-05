const {Schema,model}=require("mongoose");

const userSchema=new Schema({
    fullName : {
        type:String,
        required: true,

    },
    email :{
        type:String,
        required: true,
        unique : true
    },
    salt:{
        type:String,
        required: true 
    },
    password:{
        type:String,
        required: true
    },
    profileImgURL :{
        type:string,
        default: "/images/user.png",
    },
    role:{
        type:'string',
        enum:["USER","ADMIN"],
        default: "USER",
    }
},
{timestamps : true}
);
 const User=model(user,userSchema);
 module.exports=User;