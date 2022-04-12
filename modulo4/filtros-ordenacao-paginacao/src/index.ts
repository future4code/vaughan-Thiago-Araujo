import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getAllUsersName } from './endpoints/getAllUsersName';
import { getAllUsersUsers } from './endpoints/getAllUsersUser';

app.get("/recipes", getAllRecipes)

app.get("/user/name=?", getAllUsersName)

app.get("/user/user=?", getAllUsersUsers)