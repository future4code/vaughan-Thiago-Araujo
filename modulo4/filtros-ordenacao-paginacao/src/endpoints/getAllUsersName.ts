import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllNames(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const { titulo } = req.query

    let ordernar = req.query.ordenacao as string
    let pagina = Number(req.query.pagina)
    let quantidadeDeReceitasNaTela = 2

    let offset = quantidadeDeReceitasNaTela * (pagina - 1)

    if (!titulo) {
      throw new Error("A propridade titulo deve ser passada")
    }

    if (pagina <= 0) {
      throw new Error("Pagina somente acima de 1")
    }

    if (ordernar.toUpperCase() !== 'ASC' && ordernar.toUpperCase() !== 'DESC') {
      ordernar = 'ASC'
    }

    const result = await connection("aula49_recipes")
      .select("*")
      .where("title", "like", `%${titulo}%`)
      .orderBy("title", `${ordernar}`)
      .limit(quantidadeDeReceitasNaTela)
      .offset(offset)

    if (result.length < 1) {
      throw new Error(`Nao foi possivel achar o titulo '${titulo}'`)
    }

    const recipes = result.map(toRecipe)

    res.status(200).send(recipes)

  } catch (error: any) {
    res.status(422).send({ message: error.message })
  }
}

const toRecipe = (input: any): recipe => {
  return {
    id: input.id,
    title: input.title,
    description: input.description,
    userId: input.user_id,
    createdAt: input.created_at
  }
}



