import { app } from "./controller/app"
import { signup } from './endpoints/signup'

app.post("/user/singup", signup)