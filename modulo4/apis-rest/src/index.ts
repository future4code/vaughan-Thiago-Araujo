import * as express from "express"
import * as cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

type user = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

export let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: "ADMIN",
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: "NORMAL",
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: "NORMAL",
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: "NORMAL",
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: "ADMIN",
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: "ADMIN",
    age: 60
  }
]

app.get("/users", (req, res) => {
  res.send(users)
})

// Exercício 1
//
// a) O método get 
// b) Indicaria como "/users"

app.get("/users/:type", (req, res) => {
  let errorCode = 400
  try {
    const type: string = req.query.type as string
    const types: user | undefined = users.find((types) => types.type === type)
    if (!types) {
      errorCode = 404;
      throw new Error("Type not found")
    }
    res.status(200).send(types)
  } catch (error) {
    res.status(errorCode).send({ message: error.message })
  }
})

// Exercício 2
//
// a) Passei como query porque eu acho que funcionaria melhor
// b) Por enquanto ainda não pensei em nada

app.get("/users/search", (req, res) => {
  let errorCode: number = 400;
  try {
    const name: string = req.query.name as string;
    const user: user | undefined = users.find((user) => user.name === name);
    if (!user) {
      errorCode = 404;
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error: any) {

    res.status(errorCode).send({ message: error.message });
  }
});

// Exercício 3
//
// a) query

app.post("/users", (req, res) => {
  let errorCode: number = 400;
  try {
    const { id, name, email, type, age } = req.body;

    if (!id || !name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Please check the fields!");
    }

    const newUser: user = {
      id,
      name,
      email,
      type,
      age,
    };

    users.push(newUser);

    res.status(201).send({ message: "User created successefully" });
  } catch (error: any) {
    res.status(errorCode).send({ messagem: error.message });
  }
});

// Exercício 4
//
// a) Deu erro 
// b) Não sei deu erro então não tive oq dizer 

app.listen(3003, () => {
  console.log("O servidor está rodando na porta 3003! XD")
})
