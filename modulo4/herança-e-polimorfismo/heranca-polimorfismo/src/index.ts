import { Customer, User } from './Users';


const user1 = new User("1", "thiago@gmail.com", "thiago", "bananinha123")
console.log(user1)
const user2 = new Customer("2", "amora@gmail.com", "Amora", "amora123", "300")
console.log(user2)
console.log(user2.getCreditCard())
console.log(user2.interoduceYourself())