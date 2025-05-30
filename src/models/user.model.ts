import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
     username: { type: String, required: true },
     email: { type: String, required: true },
     phone: { type: String, required: true },
     age: { type: Number, required: true },
     password: { type: String, required: true },
})


const User = mongoose.model('user', userSchema)

export default User