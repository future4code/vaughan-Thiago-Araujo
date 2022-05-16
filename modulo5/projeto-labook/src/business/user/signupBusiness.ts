import { insertUser } from "../../data/user/insertUser";
import { userData } from "../../model/user";
import { generateToken } from "../../services/Authenticator";
import { hash } from '../../services/HashManager';
import { generateId } from "../../services/IdGenerator";

export const signupBusiness = async (
   userData: userData
): Promise<string> => {
   if (
      !userData.name ||
      !userData.email ||
      !userData.password
   ) {
      throw new Error('Preencha os campos "name", "email" e "password"')
   }

   const cypherPassword = await hash(userData.password);

   const newUser = {
      ...userData,
      password: cypherPassword,
      id: generateId()
   }

   await insertUser(newUser)

   const token: string = generateToken({
      id: newUser.id,
   })

   return token

}
