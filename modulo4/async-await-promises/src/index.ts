import * as express from "express"
import * as cors from "cors"
import { AddressInfo } from 'net';
import axios from 'axios';
import { baseUrl } from './Url';

const app = express();
app.use(express.json());
app.use(cors());

// Exercício 1
// a) GET
// b) return response.data

async function getSubscribers(): Promise<void> {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data;
};

// Exercício 2
// a) Uma função assíncrona espera pela resolução da Promise passada e depois retoma a execução da função e por fim retorna o valor resolvido.
// E a arrow function assíncrona permitem ter um retorno implícito, que são valores retornados sem ter que usar a palavra return.

const getSubscribersArrowFunction = async (): Promise<void> => {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data;
};

// Exercício 3
// a) Acho que não dará erro algum.
// b) O type any vai funcionar porque ele pode retornar qualquer coisa seja uma string ou number.   

type user = {
  id: string;
  name: string;
  email: string;
};

const getSubscribersType = async (): Promise<user[]> => {
  const response = await axios.get(`${baseUrl}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

// Exercício 4 
// a) Void, permite fazer funções que não retornam nada e funções que não têm parâmetros

async function createNews(
  title: string,
  content: string,
  date: number
): Promise<void> {
  await axios.put(`${baseUrl}/news`, {
    title: title,
    content: content,
    date: date
  });
};

// Exercício 5

const sendNotifications = async (
  users: user[],
  message: string
): Promise<void> => {

  try {
    for (const user of users) {
      await axios.post(`${baseUrl}/notifications`, {
        subscriberId: user.id,
        message
      });
    }

    console.log("Todas as notificações foram enviadas");
  } catch {
    console.log("Error");
  }
};

// Exercício 6
// a) Promise.all retornará um array com os valores de resultado de todas as promessas passadas e ele irá rejeitar caso qualquer uma delas falhe.
// b) Seria uma boa já que ele pega todas Promise já resolvidas 
// c) 
const sendNotificationsPromiseAll = async (
  users: user[],
  message: string
): Promise<void> => {

  try {
    const promises = users.map(user => {
      return axios.post(`${baseUrl}/notifications`, {
        subscriberId: user.id,
        message: message,
      })
    })

    await Promise.all(promises);

  } catch {
    console.log("Error");
  }
};

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor está rodando no https://localhost:${address.port}`)
  } else {
    console.error(`Deu ruim :(`)
  }
});

