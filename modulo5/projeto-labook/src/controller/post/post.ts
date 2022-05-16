import { Request, Response } from "express";
import { postBusiness } from '../../business/post/postBusiness';

export const post = async (
  req: Request,
  res: Response
) => {
  try {
    const { photo, description, type, createAt } = req.body

    const token: string = await postBusiness({
      photo, description, type, createAt
    })

    res
      .status(201)
      .send({
        message: "Post criado!",
        token
      })

  } catch (error: any) {
    res.status(400).send(error.message)
  }
}