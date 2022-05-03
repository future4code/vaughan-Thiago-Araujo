import { Request, Response } from "express";
import { connection } from '../../data/connection';
import { post } from '../../model/post';


export const getPost = async (
  req: Request,
  res: Response
) => {
  try {
    let message = "Success!"

    const { id } = req.params

    const queryResult: any = await connection("labook_posts")
      .select("*")
      .where({ id })

    if (!queryResult[0]) {
      res.statusCode = 404
      message = "Post not found"
      throw new Error(message)
    }

    const post: post = {
      id: queryResult[0].id,
      photo: queryResult[0].photo,
      description: queryResult[0].description,
      type: queryResult[0].type,
      createAt: queryResult[0].created_at,
    }

    res.status(200).send({ message, post })

  } catch (error: any) {
    let message = error.sqlMessage || error.message
    res.statusCode = 400

    res.send({ message })
  }
}