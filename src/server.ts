import express from 'express';
import path from 'path';
import registerRouter from './routes/register'
import mongoose  from 'mongoose';


const app=express();
const PORT =3000
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true })); // Needed for form submissions

mongoose.connect('mongodb://127.0.0.1:27017/zodApp')
.then(()=>{
     console.log("Connected to MongoDB")
}).catch((err)=>{
     console.log("error connecting to MongoDB",err)
})


app.use('/', registerRouter);

app.listen(PORT,()=>{
     console.log(`Server is running on http://localhost:${PORT}`)
})
