import { Request, Response } from 'express';
import { BaseDatabase } from '../data/BaseDatabase';
import { PetsDatabase } from '../data/PetsDatabase';
import { Authenticator } from '../services/Authenticator';

export const getPets = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const authenticator = new Authenticator();
    const idPayload = authenticator.getData(token);
    const userId = idPayload.id;

    const allPets = new PetsDatabase();

    if (!userId) {
      throw new Error("Confira o id do usuário");
    }

    const result = await allPets.getPets(userId);
    res.status(200).send({
      allPets: result,
    });
  } catch (error: any) {
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