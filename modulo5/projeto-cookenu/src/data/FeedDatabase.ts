import { BaseDatabase } from "./BaseDatabase";

export class FeedDatabase extends BaseDatabase {
  public async getFeed(userId: string): Promise<any> {
    try {
      const result = await this.getConnection().raw(`
    SELECT Recipes.id, title,description, creation_date, CookenuUsers.id, CookenuUsers.name
    From Recipes
    JOIN Followers 
    ON Followers.followed_id = Recipes.creator_id
    AND Followers.user_id = "${userId}"
    JOIN CookenuUsers
    ON Recipes.creator_id = CookenuUsers.id;
     `);
      return result[0];
    } catch (error) {
      throw new Error(error);
    }
  }
}