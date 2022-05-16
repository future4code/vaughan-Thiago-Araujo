import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { UserDatabase } from "../data/UserDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

export const getUserProfileById = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    authenticator.getData(token);

    const id = req.params.id;

    const userDataBase = new UserDatabase();
    const user = await userDataBase.getUserById(id);

    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  }
  await BaseDatabase.destroyConnection();
};