import React from "react";
import styled from "styled-components";
import axios from "axios";
import UserDetail from "./UserDetail";

const Border = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  min-width: 60px;
  justify-content: center;
  border: 2px solid black;
  padding: 10px 10px;
`

const UserListItem = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 60px;
  justify-content: center;
  border-bottom: 1px solid black;
  padding: 10px 0;
`;

const DeleteButton = styled.span`
  color: blue;
  cursor: pointer;
`;

const axiosConfig = {
  headers: {
    Authorization: "thiago-henrique-vaughan"
  }
};

class Users extends React.Component {
  state = {
    usersList: [],
    currentPage: "usersList",
    userId: "",
    name: ""
  };

  componentDidMount() {
    this.fetchUsersList();
  }

  fetchUsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      });
  };

  handleUserDeletion = userId => {
    if (window.confirm("Tem certeza que deseja apagar o usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          axiosConfig
        )
        .then(() => {
          alert("Usuário apagado com sucesso!");
          this.fetchUsersList();
        })
        .catch(e => {
          alert("ERRO AO APAGAR USUÁRIO");
        });
    }
  };

  changePage = userId => {
    if (this.state.currentPage === "usersList") {
      this.setState({ currentPage: "userDetail", userId: userId });
    } else {
      this.setState({ currentPage: "usersList", userId: "" });
    }
  };

  handleNameChange = event => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchUser = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name
        }&email=`,
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.currentPage === "usersList" ? (
          <Border>
            <h3>Lista de Usuários</h3>
            <UserListItem>
              {this.state.usersList.length === 0 && <div>Carregando...</div>}
              {this.state.usersList.map(user => {
                return (
                  <UserListItem>
                    <span onClick={() => this.changePage(user.id)}>
                      {user.name}
                    </span>
                    <DeleteButton
                      onClick={() => this.handleUserDeletion(user.id)}
                    >
                      X
                    </DeleteButton>
                  </UserListItem>
                );
              })}
            </UserListItem>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button onClick={this.handleSearchUser}>Salvar edição</button>
          </Border>
        ) : (
          <UserDetail userId={this.state.userId} changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default Users;