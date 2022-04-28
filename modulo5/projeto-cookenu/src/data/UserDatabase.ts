import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME: string = "CookenuUsers";

  public async createUser(
    id: string,
    name: string,
    email: string,
    password: string
  ): Promise<any> {
    try {
      if (password.length >= 6) {
        await this.getConnection()
          .insert({
            id,
            name,
            email,
            password,
          })
          .into(UserDatabase.TABLE_NAME);
        console.log("sucesso na criação");
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  public async fetchUserInfoByEmail(email: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select("*")
        .where({ email })
        .from(UserDatabase.TABLE_NAME);

      return result[0];
    } catch (error) {
      throw new Error(error);
    }
  }

  public async getUserById(id: string): Promise<any> {
    try {
      const result = await this.getConnection()
        .select("id", "name", "email")
        .from(UserDatabase.TABLE_NAME)
        .where({ id });

      return result[0];
    } catch (error) {
      throw new Error(error);
    }
  }
}