import app from "./app"
import profile from './endpoints/profile'
import login from './endpoints/login'
import signup from './endpoints/signup'
import profileUser from './endpoints/profileUser'

app.post('/signup', signup)
app.post('/login', login)
app.get('/user/profile', profile)
app.get("/user/:id", profileUser)