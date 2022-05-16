import { app } from "./controller/app"
import { signup } from './controller/user/signup'
import { login } from './controller/user/login'
import { post } from './controller/post/post'
import { getPost } from './controller/post/getPost'


app.post('/user/signup', signup)
app.post('/user/login', login)

app.post('/post/create', post)
app.get('/posts/:id', getPost)


