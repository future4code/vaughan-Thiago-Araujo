import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function profileUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { id } = req.body;
    if (!id) {
      res.statusCode = 422;
      throw new Error("Por favor preencha 'id'")
    }

    const [user] = await
      connection('cookenu_users')
        .where({ id })

    if (!user) {
      res.statusCode = 401;
      throw new Error("Usuário inexistente")
    }

    const authenticator: Authenticator = new Authenticator()
    const payload: authenticationData = {
      id: user.id,
    }
    const token = authenticator.GenerateToken(payload)

    res.status(200).send(token)

  } catch (error) {
    if (res.statusCode === 200) {
      console.log(error)
      res.status(500).send({ message: "Deu ruim 😡" })
    } else {
      res.end()
    }
  }
}
