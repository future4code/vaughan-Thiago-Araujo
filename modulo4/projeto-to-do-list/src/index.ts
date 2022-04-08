import * as express from "express"
import * as cors from "cors"
import connection from './connection'
import { AddressInfo } from 'net';

const app = express();
app.use(express.json());
app.use(cors());

app.post("/user", async (req, res) => {
  try {
    await connection.raw(`
      INSERT INTO Users (id, nickname, email)
      VALUES(
      ${Date.now().toString()},
      "${req.body.nickname}",
      "${req.body.email}"
      );
    `)
    res.status(201).send("Usuário criado com sucesso!")
  } catch (error: any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
})



const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor está rodando no https://localhost:${address.port}`)
  } else {
    console.error(`Deu ruim :(`)
  }
});