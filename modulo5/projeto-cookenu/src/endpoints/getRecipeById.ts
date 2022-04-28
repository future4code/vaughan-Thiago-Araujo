import { Request, Response } from "express";
import { RecipesDatabase } from "../data/RecipesDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function getRecipeById(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const tokenData = authenticator.getData(token);
    const result = await new RecipesDatabase().getRecipeById(req.params.id);

    res.status(200).send({ message: result });
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    });
  }
}