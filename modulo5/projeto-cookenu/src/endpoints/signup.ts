import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { TokenExpiredError } from "jsonwebtoken";
import { Authenticator } from "../services/Authenticator";

export const signup = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    if (!email || !password || !name) {
      throw new Error("Insert all required information");
    }

    if (email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const hashManager = new HashManager();
    const encryptedPassword = await hashManager.hash(password);

    const userDatabase = new UserDatabase();
    await userDatabase.createUser(id, name, email, encryptedPassword);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id });

    res.status(200).send({
      message: `Usuário ${name} criado com sucesso!`,
      acess_token: token,
    });
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  } finally {
    await BaseDatabase.destroyConnection();
  }
};