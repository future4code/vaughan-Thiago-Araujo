import * as express from "express"
import * as cors from "cors"
import { AddressInfo } from 'net';
import * as dotenv from 'dotenv'

export const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor está rodando no https://localhost:${address.port}`)
  } else {
    console.error(`Deu ruim :(`)
  }
});