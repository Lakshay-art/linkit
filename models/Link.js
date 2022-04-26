import mongoose from 'mongoose'
const LinkSchema=new mongoose.Schema({
     user:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
     username:{type:String,required:true},
     title:{type:String,required:true},
     link:{type:String,required:true},
     visits:{type:String},
     description:{type:String},
     color:{type:String},
     tag:{type:String}
},{timestamps:true});


export default mongoose.models.link||mongoose.model('link',LinkSchema)