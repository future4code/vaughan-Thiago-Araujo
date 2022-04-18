import { connection } from "./connection"
import users from "./users.json"
import recipes from "./recipes.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`

      CREATE TABLE IF NOT EXISTS usersRecipe (
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) UNIQUE NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS recipes (
         id VARCHAR(255) PRIMARY KEY,
         title VARCHAR(255) NOT NULL,
         description TEXT(1023),
         user_id VARCHAR(255),
         created_at BIGINT,
         FOREIGN KEY(user_id) REFERENCES usersRecipe(id) 
      );

`)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("usersRecipe")
   .insert(users)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const insertRecipes = () => connection("recipes")
   .insert(recipes)
   .then(() => { console.log("Receitas criadas") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .then(insertRecipes)
   .finally(closeConnection)