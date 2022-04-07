import * as express from "express";
import knex from "knex";
import * as cors from "cors";
import * as dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app = express();
app.use(express.json());
app.use(cors());

async function searchActor(name: string): Promise<void> {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `);
  return result;
}

async function countActors(gender: string): Promise<void> {
  const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
  const count = result[0][0].count;
  return count;
}

async function updateActor({ id, salary }: { id: string; salary: number; }): Promise<void> {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
}

async function deleteActor(id: string): Promise<void> {
  await connection("Actor")
    .delete()
    .where("id", id);
}

async function avgSalary(gender: string): Promise<any> {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
}

app.get("/actor?gender=", async (req, res) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.put("/actor", async (req, res) => {
  try {
    await updateSalary(req.body.id, req.body.salary);
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.delete("/actor/:id", async (req, res) => {
  try {
    await deleteActor(req.params.id);
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`O servidor está rodando em http://localhost:${address.port} XD`);
  } else {
    console.error(`ERROR - :|`);
  }
});

function updateSalary(id: any, salary: any) {
  throw new Error('Function not implemented.');
}
