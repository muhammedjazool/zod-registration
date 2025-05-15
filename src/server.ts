import express from 'express';
import path from 'path';
import registerRouter from './routes/register'
import mongoose from 'mongoose';


const app = express();
const PORT = 3000
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true })); // Needed for form submissions
app.use('/', registerRouter);

async function startServer() {
     try {
          await mongoose.connect('mongodb://127.0.0.1:27017/zodApp');
          console.log("Connected to MongoDB");

          app.listen(PORT, () => {
               console.log(`Server is running on http://localhost:${PORT}`);
          });
     } catch (err) {
          console.error("Error connecting to MongoDB:", err);
     }
}

startServer();