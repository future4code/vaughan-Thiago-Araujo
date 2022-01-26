import React from "react";
import axios from "axios";
import styled from "styled-components";

const Border = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  min-width: 60px;
  justify-content: start;
  border: 2px solid black;
  padding: 60px 10px;
`

class SignUpPage extends React.Component {
  state = {
    name: "",
    email: ""
  };

  handleNameChange = event => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleEmailChange = event => {
    const newEmailValue = event.target.value;

    this.setState({ email: newEmailValue });
  };

  handleCreateUser = () => {
    const axiosConfig = {
      headers: {
        Authorization: "thiago-henrique-vaughan"
      }
    };

    const body = {
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        axiosConfig
      )
      .then(() => {
        alert(`Usuário ${this.state.name} criado com sucesso!`);
        this.setState({ name: "", email: "" });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <Border>
        <h2>Cadastro</h2>
        <input
          placeholder="Nome"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <input
          placeholder="E-mail"
          type="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <button onClick={this.handleCreateUser}>Criar Usuário</button>
      </Border>
    );
  }
}

export default SignUpPage;
