import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const arrayPosts = [
  {  nomeUsuario: "Paulinha",
     fotoUsuario: "https://picsum.photos/50/50",
     fotoPost: "https://picsum.photos/200/150",
  },
  {
    nomeUsuario: "Thiago",
    fotoUsuario: "https://www.pngmart.com/files/12/Cool-Emoji-With-Hand-Transparent-Background.png",
    fotoPost: "https://img.olhardigital.com.br/wp-content/uploads/2021/03/galaxias.jpg",
  },
  {
    nomeUsuario: "Amora",
    fotoUsuario: "https://imagensemoldes.com.br/wp-content/uploads/2018/08/Imagem-de-Frutas-Amora-3-PNG.png",
    fotoPost: "https://www.portaldodog.com.br/cachorros/wp-content/uploads/2020/07/cachorro-de-chapeu-e-cachecol_67473-1363.jpg",
  },    
]

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
`;

class App extends React.Component {
  state = {
    posts: arrayPosts,
    userName: "",
    userPhoto: "",
    postPhoto: ""
  };

  changeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  changeUserPhoto = (event) => {
    this.setState({ userPhoto: event.target.value });
  };

  changePostPhoto = (event) => {
    this.setState({ postPhoto: event.target.value });
  };

  addNewPost = () => {
    const newPost = {
      nomeUsuario: this.state.userName,
      fotoUsuario: this.state.userPhoto,
      fotoPost: this.state.postPhoto
    };

    this.setState({
      posts: [...this.state.posts, newPost],
      userName: "",
      userPhoto: "",
      postPhoto: ""
    });
  };

  render() {
    const componentesPost = this.state.posts.map((p) => {
      return (
        <Post
          nomeUsuario={p.nomeUsuario}
          fotoUsuario={p.fotoUsuario}
          fotoPost={p.fotoPost}
        />
      );
    });

    return (
      <AppContainer>
        <FormContainer>
          <input
            placeholder={"Nome do Usuário"}
            value={this.state.userName}
            onChange={this.changeUserName}
          />
          <input
            placeholder={"Foto do Usuário"}
            value={this.state.userPhoto}
            onChange={this.changeUserPhoto}
          />
          <input
            placeholder={"Foto do Post"}
            value={this.state.postPhoto}
            onChange={this.changePostPhoto}
          />
          <button onClick={this.addNewPost}>Criar Post</button>
        </FormContainer>
        {componentesPost}
      </AppContainer>
    );
  }
}

export default App;
