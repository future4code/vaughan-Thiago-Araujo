import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";

const app = express();
dotenv.config();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port} 😎`);
  } else {
    console.error(`Error 😭`);
  }
});