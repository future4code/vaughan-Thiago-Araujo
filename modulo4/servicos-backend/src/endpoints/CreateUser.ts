import { Request, Response } from 'express';
import { getAddressInfo } from '../services/getAddressInfo';


export const createUser = async (req: Request, res: Response) => {
  try {
    const { zipcode, email, password } = req.body
    const address = await getAddressInfo(zipcode)

    if (!address) {
      throw new Error("Erro")
    }
    res.send(address)
  } catch (error) {
    res.send({ message: "Erro" })
  }
}