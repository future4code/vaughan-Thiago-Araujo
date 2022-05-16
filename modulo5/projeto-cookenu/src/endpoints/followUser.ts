import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { FollowersDatabase } from '../data/FollowersDataBase';

export const followUser = async (req: Request, res: Response) => {
  try {
    const followedUserId = req.body.userToFollowId as string;
    if (!followedUserId) {
      throw new Error("Confira o id digitado");
    }
    const userDatabase = new UserDatabase();

    const user = await userDatabase.getUserById(followedUserId);

    if (!user) {
      throw new Error("Usuário a ser seguido não existe");
    }

    const token = req.headers.authorization as string;
    const authenticator = new Authenticator();
    const idPayload = authenticator.getData(token);

    const followersDatabase = new FollowersDatabase();
    await followersDatabase.followUser(idPayload.id, followedUserId);

    res.status(200).send({
      message: "User followed sucessefuly",
    });
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
    res.status(401).send({
      message: "Unauthorized",
    });
  } finally {
    await BaseDatabase.destroyConnection();
  }
};