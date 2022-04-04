import * as express from "express"
import * as cors from "cors"
import { produtos } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/test", (req, res) => {
  res.send("Seria o único propósito da folha o de cair?")
})

app.post("/produtos/:produtosId/adicionar", (req, res) => {
  const user = req.headers.authorization
  const produtosId = req.params.produtosId
  const novoProduto = {
    id: Date.now().toString(),
    name: req.body.name,
    price: req.body.price
  }
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].id === user) {
      for (let j = 0; j < produtos[i].estabelecimentos.length; j++) {
        if (produtos[i].estabelecimentos[j].id === produtosId) {
          produtos[i].estabelecimentos[j].produtos.push(novoProduto)
        }
      }
    }
  }
  res.send(produtos)
})

app.get("/produtos", (req, res) => {
  res.send(produtos)
})




app.listen(3003, () => {
  console.log("O servidor está rodando na porta 3003! XD")
})