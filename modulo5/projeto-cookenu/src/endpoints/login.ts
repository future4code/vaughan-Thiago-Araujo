import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { BaseDatabase } from "../data/BaseDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export const login = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const userDatabase = new UserDatabase();
    const user = await userDatabase.fetchUserInfoByEmail(email);

    const hashManager = new HashManager();
    const isPasswordCorrect = hashManager.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("Confira informações de acesso");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id: user.id });

    res.status(200).send({
      token_acess: token,
    });
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  } finally {
    await BaseDatabase.destroyConnection();
  }
};