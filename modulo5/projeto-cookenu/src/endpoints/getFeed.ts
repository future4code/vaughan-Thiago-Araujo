import { Request, Response } from "express";
import { Authenticator } from "../services/Authenticator";
import { FeedDatabase } from "../data/FeedDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

export const getFeed = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const authenticator = new Authenticator();
    const idPayload = authenticator.getData(token);
    const userId = idPayload.id;

    const feed = new FeedDatabase();

    if (!userId) {
      throw new Error("Confira o id do usuário");
    }

    const result = await feed.getFeed(userId);
    res.status(200).send({
      feed: result,
    });
  } catch (error) {
    console.log(error);
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