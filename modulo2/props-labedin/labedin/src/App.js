import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/ogw/ADea4I5DSHqblCv0ZrVFyQjvheXu5xb43SuIByBkLc4bicw=s83-c-mo" 
          nome="Thiago Henrique dos Santos Araújo" 
          descricao="Oii, eu sou o Thiago, é prazer em conhecê-lo(a)! Atualmente estou estudadando pra ser um desenvolvedor de software."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
        <CardPequeno
        imagem="https://www.caceres.mt.leg.br/banco-de-imagens/email.png/image"
        nome="Email: thiagohenrique2309@gmail.com"
        />

        <CardPequeno 
        imagem="https://www.jacui.mg.leg.br/imagens/local.png/image"
        nome="Endereço: Goiânia-GO"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://cdn-icons-png.flaticon.com/512/3486/3486728.png" 
          nome="Telemarketing" 
          descricao="Tenho 3 meses de experiência em telemarketing" 
        />
        
        <CardGrande 
          imagem="https://cdn.pixabay.com/photo/2020/06/09/08/16/sun-5277491_960_720.png" 
          nome="Energia solar" 
          descricao="Tive 1 ano de experiência, como instalador de energia fotovoltaica" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="data:image/png;base64,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" 
          texto="Linkedin" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" 
          texto="Instagram" 
        />        
      </div>
    </div>
  );
}

export default App;
