import { BaseDatabase } from "./BaseDatabase";
import { Request } from "express";


export class RecipesDatabase extends BaseDatabase {
  private static TABLE_NAME = "Recipes";

  public async createRecipe(
    title: string,
    description: string,
    creation_date: string,
    id: string,
    creator_id: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          title,
          description,
          creation_date,
          creator_id
        })
        .into(RecipesDatabase.TABLE_NAME);

      console.log("Recipe creation sucesseful!");
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getRecipeById(id: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select("title", "description")
        .where({ id })
        .from(RecipesDatabase.TABLE_NAME);

      return result[0];
    } catch (error) {
      throw new Error(error);
    }
  }
}