import { BaseDatabase } from "./BaseDatabase";

export class PetsDatabase extends BaseDatabase {
  public async getPets(userId: string): Promise<any> {
    try {
      const result = await this.getConnection().raw(`
        SELECT * FROM pets
     `);
      return result[0];
    } catch (error: any) {
      throw new Error(error);
    }
  }
}