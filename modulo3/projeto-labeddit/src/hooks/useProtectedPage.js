import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToLogin } from "../routes/coordinator";

const useProtectedPage = () => {
  const Navigate = useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem("token")
    if (!token){
      goToLogin(Navigate)
    }
  }, [Navigate])
}

export default useProtectedPage