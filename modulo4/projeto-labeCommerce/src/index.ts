import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net';
import connection from './connection';

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO labecommerce_users (id, name, email, password)
            VALUES(
            ${Date.now().toString()},
            "${req.body.name}",
            "${req.body.email}",
            "${req.body.password}"        
            );
        `)
        res.status(201).send("Usuário criado com sucesso")
    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
});

app.get("/users", async (req: Request, res: Response): Promise<void> => {
    try {
        const resultado = await connection.raw(`
            SELECT * FROM labecommerce_users;
        `)
        res.status(200).send({ message: resultado[0] })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
});

app.post("/products", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO labecommerce_products (id, name, price, image_url)
            VALUES(
            ${Date.now().toString()},
            "${req.body.name}",
            ${req.body.price},
            "${req.body.imageUrl}"        
            );
        `)
        res.status(201).send("Produto criado com sucesso")
    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
});

app.get("/products", async (req: Request, res: Response): Promise<void> => {
    try {
        const resultado = await connection.raw(`
            SELECT * FROM labecommerce_products;
        `)
        res.status(200).send({ message: resultado[0] })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
});

app.post("/purchases", async (req: Request, res: Response): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price)
            VALUES(
            ${Date.now().toString()},
            "${req.body.user_id}",
            "${req.body.product_id}",
            ${req.body.quantity},
            ${req.body.totalPrice}        
            );
        `)
        res.status(201).send("Compra realizada com sucesso")
    } catch (err: any) {
        res.status(500).send(err.sqlMessage || err.message)
    }
});

app.get("/users/:user_id/purchases", async (req: Request, res: Response): Promise<void> => {
    try {
        const resultado = await connection.raw(`
            SELECT * FROM labecommerce_purchases
        `)
        res.status(200).send({ message: resultado[0] })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
});

const server = app.listen(3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Servidor está rodando no https://localhost:${address.port}`)
    } else {
        console.error(`Deu ruim :(`)
    }
});
