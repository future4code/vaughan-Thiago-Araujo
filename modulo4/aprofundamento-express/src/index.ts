import * as express from "express"
import * as cors from "cors"
import { afazeres } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/ping", (req, res) => {
  res.send("Pong! 🏓")
})


app.get("/afazeres", (req, res) => {
  const allTasks = afazeres;
  console.log(allTasks)

  res.status(200).send(allTasks)
})

app.get("/afazeres/:completed", (req, res) => {
  const completed = req.params.completed;

  const taskUpdate = afazeres.map((afazeres) => {
    if (afazeres.completed === true) {
      return { ...afazeres }
    } else {
      return console.log("Error")
    }
  });
  res.send(taskUpdate)
})

app.post("/afazeres/:task", (req, res) => {

})



app.listen(3003, () => {
  console.log("O backend está rodando na porta 3003! XD")
})