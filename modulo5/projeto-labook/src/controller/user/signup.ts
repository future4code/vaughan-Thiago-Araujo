import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";

export const signup = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, email, password } = req.body

      const token: string = await signupBusiness({
         name, email, password,
      })

      res
         .status(201)
         .send({
            message: "Usuário criado!",
            token
         })

   } catch (error: any) {
      res.status(400).send(error.message)
   }
}