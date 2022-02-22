import React from "react";
import { InputConteiner, ScreenConteiner, SignUpButtonContainer } from "./styled";
import { TextField } from '@mui/material';
import useForm from "../../hooks/useForm";
import Button from "@material-ui/core/Button"

const LoginPage = () => {
  
  const onSubmitForm = (event) => {
    event.preventDefault()
  }

  const [form, onChange, clear] = useForm({username: "", email: "", password: ""})

  return(
    <ScreenConteiner>
      <InputConteiner>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"username"}
            value={form.username}
            onChange={onChange}
            label={"Nome de usuário"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            required
            type={"username"}
          />
          </form> 
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            required
            type={"email"}
          />
          </form> 
          <form onSubmit={onSubmitForm}>
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin="normal"
            required
            type={"password"}
          />
        </form>   

        <Button
        type="submit"
        fullWidth
        variant="contained"
        color={"primary"}
        margin="normal"
        >
          Fazer Login!
        </Button>
      </InputConteiner>
      <SignUpButtonContainer>
          <Button
          type="submit"
          fullWidth
          color={"primary"}
          margin="normal"
          >
            Não possui conta ? Cadastre-se        
          </Button>  
      </SignUpButtonContainer>
    </ScreenConteiner>
  )
} 

export default LoginPage