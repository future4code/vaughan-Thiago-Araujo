import * as userDatabase from '../data/UserDatabase'
import { user, USER_ROLES } from '../types/user';

async insertUser(user) {

  try {

    if (!USER_ROLES.name || !user.email || !user.password || !user.role) {
      throw new Error("Please fill all the fields");
    }

    if (user.email.indexOf("@") === -1) {
      throw new Error("Invalid Email");
    }

    if (user.password.length < 6) {
      throw new Error("Password must have at least 6 characters");
    }

    const id = generateId();
    const hashPassword = await hash(user.password);
    await userDatabase.insertUser(id, user.email, user.name, hashPassword, user.role);
    const token = generateToken({ id, role });

    return token;

  } catch (error) {
    throw new Error(error.message || "Error creating user. Please check your system administrator.");
  }
}