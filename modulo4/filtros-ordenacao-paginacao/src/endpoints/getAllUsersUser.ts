import { Request, Response } from "express"
import { connection } from "../data/connection"


export default async function selectAllUsers(): Promise<any> {
  const result = await connection.raw(`
     SELECT id, name, email, type
     FROM usersRecipe;
  `)

  return result[0]
}

export const getAllUsersUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await selectAllUsers()

    if (!users.length) {
      res.statusCode = 404
      throw new Error("No recipes found")
    }

    res.status(200).send(users)

  } catch (error) {
    console.log(error)
    res.send()
  }
}