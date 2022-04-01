import * as express from "express"
import * as cors from "cors"
import { listUsers } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get("/users", (req, res) => {
  res.send(listUsers)
})

app.post("/users", (req, res) => {
  let errorCode: number = 400;
  try {
    const { id, nome, CPF, dataDeNascimento, saldo } = req.body;

    if (!id || !nome || !CPF || !dataDeNascimento || !saldo) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    let newUser = {
      id: 0,
      nome: "",
      CPF: 0,
      dataDeNascimento: "",
      saldo: 0,
    };

    listUsers.push(id, nome, CPF, dataDeNascimento, saldo);

    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});


app.listen(3003, () => {
  console.log("O servidor está rodando na porta 3003! XD")
})