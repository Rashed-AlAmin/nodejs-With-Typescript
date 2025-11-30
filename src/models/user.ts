import mongoose, { Schema, Document} from "mongoose";


interface IUser extends Document{
    name:String,
    email:String,
    age:Number,
    createdAt:Date
}
const userSchema=new Schema<IUser>({
    name:String,
    email:String,
    age:Number,
    createdAt:Date

})

const User=mongoose.model<IUser>('User',userSchema)
export {User,IUser}
