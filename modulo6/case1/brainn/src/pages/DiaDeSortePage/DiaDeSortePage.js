import React, { useEffect, useState } from "react";
import BasicSelect from "../../components/Select/Select";
import { BASE_URL } from "../../constants/urls";
import { getCurrentDate } from "../../utils/data";
import { Bolinha, BolinhaDiv, ConteinerMain, ConteinerSecond, H1, H3, IMG, PageFull } from "./styled";
import clover from "../../assets/clover.png"

const DiaDeSortePage = () => {

  const [dia, setDia] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/concursos/440`)
    .then(response => response.json())
    .then(data => setDia(data.numeros))
  })

  return ( 
    <PageFull>
      <ConteinerMain>
          <BasicSelect></BasicSelect> 
          <H1><IMG src={clover} alt={"Logo"}/> DIA DE SORTE</H1>
          <H3>
            Concurso <br/>
            440 - {getCurrentDate()}
          </H3>
      </ConteinerMain>
      <ConteinerSecond>
        <BolinhaDiv>
          {dia.map(dia => {
            return(
              <div key={dia.id}>
                <Bolinha>{dia}</Bolinha>
              </div>
            )
          })}
        </BolinhaDiv>
        <h4>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</h4>
      </ConteinerSecond>
    </PageFull>       
  )
}

export default DiaDeSortePage