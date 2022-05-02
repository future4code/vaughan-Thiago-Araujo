import { Request, Response } from "express";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export const signup = async (req: Request, res: Response) => {
   try {
      const { name, email, password, role } = req.body

      if (!name || !email || !password || !role) {
         throw new Error('Preencha os campos "name", "email" e "password"')
      }

      const id: string = generateId()

      const cypherPassword = await hash(password);

      await insertUser({ id, name, email, password: cypherPassword, role })

      const token: string = generateToken({ id, role: role })

      res.status(201).send({ message: "Usuário criado!", token })

   } catch (error: any) {
      res.status(400).send(error.message)
   }
}