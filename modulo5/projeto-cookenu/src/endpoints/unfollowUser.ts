import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { BaseDatabase } from "../data/BaseDatabase";
import { FollowersDatabase } from '../data/FollowersDataBase';

export const unfollowUser = async (req: Request, res: Response) => {
  try {
    const followeduserId = req.body.userToUnfollowId as string;
    if (!followeduserId) {
      throw new Error("Confira o id digitado");
    }
    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserById(followeduserId);

    if (!user) {
      throw new Error("Usuário a deixar de ser seguido não existe");
    }

    const token = req.headers.authorization as string;
    const authenticator = new Authenticator();
    const idPayload = authenticator.getData(token);

    const followersDatabase = new FollowersDatabase();
    await followersDatabase.unfollowUser(idPayload.id, followeduserId);

    res.status(200).send({
      message: "Unfollowed successfully",
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