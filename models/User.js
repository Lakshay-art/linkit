import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    isAdmin:{type:String,required:true},
    isPremium:{type:String,required:true},
    visits:{type:String},
    profilepic:{type:String},
},{timestamps:true})

//const User=mongoose.model('user',UserSchema);
export default mongoose.models.User || mongoose.model('User', UserSchema)