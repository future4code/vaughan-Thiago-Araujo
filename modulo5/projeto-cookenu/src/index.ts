import express from "express";
import dotenv from "dotenv";

import { AddressInfo } from "net";
import { UserDatabase } from "./data/UserDatabase";
import { signup } from "./endpoints/signup";
import { login } from "./endpoints/login";
import { RecipesDatabase } from "./data/RecipesDatabase";
import { postRecipe } from "./endpoints/postRecipe";
import getRecipeById from "./endpoints/getRecipeById";
import { followUser } from "./endpoints/followUser";
import { getUserProfile } from "./endpoints/getUserProfile";
import { getUserProfileById } from "./endpoints/getUserProfileById";
import { FeedDatabase } from "./data/FeedDatabase";
import { getFeed } from "./endpoints/getFeed";
import { unfollowUser } from "./endpoints/unfollowUser";

const app = express();
dotenv.config();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/user/feed", getFeed);
app.post("/signup", signup);
app.post("/login", login);
app.post("/recipe", postRecipe);
app.get("/recipe/:id", getRecipeById);
app.post("/user/follow", followUser);
app.get("/user/profile", getUserProfile);
app.get("/user/:id", getUserProfileById);
app.post("/user/unfollow", unfollowUser);