import { user } from '../types/user';
import { BaseDatabase } from './BaseDataBase';

export class UserDatabase extends BaseDatabase {
  insertUser = async (
    user: user
  ) => {
    await this.connection.insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
    }).into('arquitetura_users')
  }
}