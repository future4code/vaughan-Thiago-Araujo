import * as express from "express"
import * as cors from "cors"

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Express")
})

type Tipo = {
  id: string | number,
  name: string,
  phone: number,
  email: string,
  website: string
}

let pessoa1: Tipo = {
  id: '1',
  name: 'Will',
  phone: 7777 - 7777,
  email: 'willtapa@gmail.com',
  website: 'google.com'
}
