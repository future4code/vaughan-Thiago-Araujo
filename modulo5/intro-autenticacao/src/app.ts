import express from 'express'
import cors from 'cors'
import createUser from './endpoints/editUser'
import generateToken from './services/GeradorDeToken'
import { generateId } from './services/GeradorDeId'
import { connection } from './connection'

const app = express()

app.use(express.json())
app.use(cors())


const getUserByEmail = async (email: string): Promise<any> => {
    const result = await connection
        .select("*")
        .from(userTableName)
        .where({ email });

    return result[0];
}

app.post("/user/signup", async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email")
        }
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password")
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        }

        const id = generateId()


        await createUser(id, userData.email, userData.password)

        const token = generateToken({
            id,
        })

        res.status(200).send({
            token,
        })
    } catch (err) {
        res.status(400).send({
            message: err.message,
        })
    }
});

app.post("/user/login", async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        };


        const user = await getUserByEmail(userData.email);

        if (user.password !== userData.password) {
            throw new Error("Invalid password");
        }


        const token = generateToken({
            id: user.id,
        });

        res.status(200).send({
            token,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

app.get("/user/profile", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string;


        const authenticationData = getData(token);

        const user = await getUserById(authenticationData.id);

        res.status(200).send({
            id: user.id,
            email: user.email,
        });
    } catch (err) {
        res.status(400).send({
            message: err.message,
        });
    }
});

app.listen(3003, () => {
    console.log('Servidor rodando na porta 3003')
})

export default app

function userTableName(userTableName: any) {
    throw new Error('Function not implemented.')
}
