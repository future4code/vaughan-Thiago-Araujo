import { connection } from "../connection";
import { post } from "../../model/post";

export const insertPost = async (
  post: post
) => {
  await connection.insert(post).into('labook_posts')
}