import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { authenticationData, user } from "../types";

export default async function SingUpUser(req: Request, res: Response): Promise<void> {
  try {
    const { name, nickname, email, password, role } = req.body

    if (!name || !nickname || !email || !password || !role) {
      res.statusCode = 422
      throw new Error("Preencha os campos 'name','nickname', 'password', 'role' e 'email'")
    }

    const [user] = await connection('UserC')
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
      nickname,
      email,
      password: cypherPassword,
      role
    }

    await connection('to_do_list_users')
      .insert(newUser)

    const authenticator: Authenticator = new Authenticator()
    const payload: authenticationData = {
      id: newUser.id,
      role: newUser.role
    }
    const token = authenticator.GenerateToken(payload)
    res.status(201).send({ token })

  } catch (error: any) {

    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" })
    } else {
      res.send({ message: error.message })
    }
  }
}