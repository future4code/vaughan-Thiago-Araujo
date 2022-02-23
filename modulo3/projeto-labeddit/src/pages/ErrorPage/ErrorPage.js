import React from "react";
import { ErrorPageContainer } from "./styled";
import { Typography } from "@material-ui/core";

const ErrorPage = () => {
  return(
    <ErrorPageContainer>
      <Typography color={"primary"} variant={"h4"} align={"center"}>Erro 404 - Página Não Encontrada</Typography>
    </ErrorPageContainer>
  )
} 

export default ErrorPage