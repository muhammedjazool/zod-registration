import {z} from 'zod';

export const registerSchema = z.object({
     username:z.string().min(3).max(20),
     email:z.string().email(),
     phone:z.string().min(10),
     age:z.number().min(1),
     password:z.string().min(6)
     })

 export type RegisterSchema=z.infer<typeof registerSchema>


     