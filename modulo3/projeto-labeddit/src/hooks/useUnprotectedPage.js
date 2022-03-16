import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToFeed } from "../routes/coordinator";

const useUnprotectedPage = () => {
  const Navigate = useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem("token")
    if (token){
      goToFeed(Navigate)
    }
  }, [Navigate])
}

export default useUnprotectedPage