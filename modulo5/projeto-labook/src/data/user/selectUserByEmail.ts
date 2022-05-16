import { connection } from "../connection"
import { user } from "../../model/user"

export const selectUserByEmail = async (
   email: string
): Promise<user> => {
   try {
      const result = await connection("labook_users")
         .select("*")
         .where({ email })

      return {
         id: result[0].id,
         name: result[0].name,
         email: result[0].email,
         password: result[0].password,
      }

   } catch (error: any) {
      throw new Error(error.slqMessage || error.message)
   }
}