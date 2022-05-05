import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.statusCode = 422;
      throw new Error("Por favor preencha 'email' e 'senha'")
    }

    const [user] = await
      connection('UserC')
        .where({ email })

    if (!user) {
      res.statusCode = 401;
      throw new Error("Usuário inexistente")
    }

    let hashManager: HashManager = new HashManager()
    const passwordIsCorrect: boolean = hashManager.compareHash(
      password,
      user.password
    )

    if (!passwordIsCorrect) {
      res.statusCode = 401;
      throw new Error("Senha incorreta")
    }

    const authenticator: Authenticator = new Authenticator()
    const payload: authenticationData = {
      id: user.id,
      role: user.role
    }
    const token = authenticator.GenerateToken(payload)

    res.status(200).send(token)

  } catch (error) {
    if (res.statusCode === 200) {
      console.log(error)
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.end()
    }
  }
}
