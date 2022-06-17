import React, { useEffect, useState } from "react";
import BasicSelect from "../../components/Select/Select";
import { BASE_URL } from "../../constants/urls";
import { getCurrentDate } from "../../utils/data";
import { Bolinha, BolinhaDiv, ConteinerMain, ConteinerSecond, H1, H3, IMG, PageFull } from "./styled";
import clover from "../../assets/clover.png"

const QuinaPage = () => {

  const [quina, setQuina] = useState([])
  
  useEffect(() => {
    fetch(`${BASE_URL}/concursos/5534`)
    .then(response => response.json())
    .then(data => setQuina(data.numeros))
  })

  return ( 
    <PageFull>
      <ConteinerMain>
          <BasicSelect></BasicSelect>       
          <H1><IMG src={clover} alt={"Logo"}/> QUINA</H1>
          <H3>
            Concurso <br/>
            5534 - {getCurrentDate()}
          </H3>
      </ConteinerMain>
      <ConteinerSecond>
        <BolinhaDiv>
          {quina.map(quina => {
            return(
              <div key={quina.id}>
                <Bolinha>{quina}</Bolinha>
              </div>
            )
          })}
        </BolinhaDiv>
        <h4>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</h4>
      </ConteinerSecond>
    </PageFull>       
  )
}

export default QuinaPage