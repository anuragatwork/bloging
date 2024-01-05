const { createHmac,randomBytes } = require('node:crypto');
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

userSchema.pre('save',function(next){
    const user=this;

    if(!user.isModified("password")) return;
    //doing encryption
    //key for encrytption different for each user
    const salt=randomBytes(16).toString();
    //using algo sha256
    const hashedPassword=createHmac('sha256', salt)
    .update(user.passowrd)
    .digest('hex');
    console.log(hash);
})
const User=model(user,userSchema);
 module.exports=User;