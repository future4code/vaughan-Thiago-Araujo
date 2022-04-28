import { Request, Response } from "express";
import { IdGenerator } from "../services/IdGenerator";
import { RecipesDatabase } from "../data/RecipesDatabase";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authenticator } from "../services/Authenticator";
import moment from "moment";

export const postRecipe = async (req: Request, res: Response) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const today = moment();
    const creation_date = today.format("YYYY-MM-DD");

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    if (!title || !description || !creation_date) {
      throw new Error("Insert all required information");
    }

    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const creatorId = authenticator.getData(token);

    const recipeDatabase = new RecipesDatabase();
    await recipeDatabase.createRecipe(
      title,
      description,
      creation_date,
      id,
      creatorId.id
    );
    res.status(200).send({
      message: "Receita adicionada",
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