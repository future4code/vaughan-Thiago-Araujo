import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";

class Etapa2 extends React.Component {
  render() {
    return (
      <div>
        <h3>Informações do ensino superior</h3>
        <PerguntaAberta pergunta={"5 - Qual curso?"} />
        <PerguntaAberta pergunta={"6 - Qual a unidade de ensino?"} />
      </div>
    );
  }
}

export default Etapa2;
