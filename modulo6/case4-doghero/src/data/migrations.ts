import dotenv from "dotenv";
import { BaseDatabase } from './BaseDatabase';

dotenv.config();

const Error = (error: any) => { console.log(error.sqlMessage || error.message) }

export class CreateTables extends BaseDatabase {
  createTables = () => this.getConnection().raw(`
  
  CREATE TABLE IF NOT EXISTS pets(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    raca VARCHAR(255) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS doghero_user(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL, 
	  password VARCHAR(255) NOT NULL
  );
  `)
    .then(() => { console.log("Tabela Criada") })
    .catch(Error)
  closeConnection = () => { this.getConnection().destroy() }
}

const migrations = new CreateTables()
migrations.createTables().finally(migrations.closeConnection)