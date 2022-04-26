import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types";
import dotenv from 'dotenv'

export class Authenticator {
  GenerateToken = (payload: authenticationData) => {
    return jwt.sign(
      payload,
      process.env.JWT_KEY as string,
      {
        expiresIn: "5h"
      }
    )
  }

  GetTokenData = (token: string) => {
    try {
      const tokenData = jwt.verify(
        token, process.env.JWT_KEY as string
      ) as authenticationData
      return tokenData;
    } catch (err) {
      console.log(err)
      return null
    }
  }
}