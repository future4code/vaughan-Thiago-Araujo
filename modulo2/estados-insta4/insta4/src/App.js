import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Thiago'}
          fotoUsuario={'https://www.pngmart.com/files/12/Cool-Emoji-With-Hand-Transparent-Background.png'}
          fotoPost={'https://img.olhardigital.com.br/wp-content/uploads/2021/03/galaxias.jpg'}
        />
        <Post
          nomeUsuario={'Amora'}
          fotoUsuario={'https://imagensemoldes.com.br/wp-content/uploads/2018/08/Imagem-de-Frutas-Amora-3-PNG.png'}
          fotoPost={'https://www.portaldodog.com.br/cachorros/wp-content/uploads/2020/07/cachorro-de-chapeu-e-cachecol_67473-1363.jpg'}
        />

      </MainContainer>
    );
  }
}


export default App;
