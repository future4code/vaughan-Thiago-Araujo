import { navigate } from "react-router-dom"

export const goToLogin = () => {
  navigate("/login")
}

export const goToFeed = () => {
  navigate("/feed")
}

export const goToRegister = () => {
  navigate("/register")
}

export const goToPost = () => {
  navigate("/post")
}