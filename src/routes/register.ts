
import express, { Router, Request, Response } from 'express';
import User from '../models/user.model'
import { registerSchema } from '../schemas/user.schema';
import path from 'path';

const router = Router()





router.get("/register", (req: Request, res: Response) => {
     res.sendFile(path.join(__dirname, "../../public/index.html"))
})


router.post("/register", async (req: Request, res: Response) => {

     try {
          const parsed = registerSchema.safeParse(req.body)

          if (!parsed.success) {
               res.status(400).json({ error: parsed.error.format() })
          }


          const { username, email, phone, age, password } = req.body
          const newUser = new User({ username, email, phone, age, password })
          await newUser.save()
          console.log('User registered:', newUser);
          res.send('registration successful')

     }
     catch (err) {
          console.log("error", err)
     }
})


export default router