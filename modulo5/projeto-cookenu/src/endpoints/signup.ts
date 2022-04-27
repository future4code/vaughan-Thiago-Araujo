import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function signup(
  req: Request,
  res: Response
): Promise<void> {

  try {
    const { name, email, password, } = req.body

    if (!name || !email || !password) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'name', 'password', e 'email'")
    }

    const [user] = await connection('cookenu_users')
      .where({ email })

    if (user) {
      res.statusCode = 409
      throw new Error('Email já cadastrado')
    }

    let idGenerator = new IdGenerator()
    const id: string = idGenerator.generateId()
    let hashManager: HashManager = new HashManager()
    const cypherPassword = hashManager.createHash(password)

    const newUser: user = {
      id,
      name,
      email,
      password: cypherPassword,
    }

    await connection('cookenu_users')
      .insert(newUser)

    const authenticator: Authenticator = new Authenticator()
    const payload: authenticationData = {
      id: newUser.id,
    }
    const token = authenticator.GenerateToken(payload)
    res.status(201).send({ token })

  } catch (error) {

    if (res.statusCode === 200) {
      res.status(500).send({ message: "Erro 😭" })
    } else {
      res.send({ message: "AAAAA" })
    }
  }
}