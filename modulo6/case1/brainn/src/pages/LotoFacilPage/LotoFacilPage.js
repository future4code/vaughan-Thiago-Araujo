import React, { useEffect, useState } from "react";
import BasicSelect from "../../components/Select/Select";
import { BASE_URL } from "../../constants/urls";
import { getCurrentDate } from "../../utils/data";
import { Bolinha, BolinhaDiv, ConteinerMain, ConteinerSecond, H1, H3, IMG, PageFull } from "./styled";
import clover from "../../assets/clover.png"

const LotoFacilPage = () => {

  const [loto, setLoto] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/concursos/2200`)
    .then(response => response.json())
    .then(data => setLoto(data.numeros))
  })
  
  return ( 
    <PageFull>
      <ConteinerMain>
          <BasicSelect></BasicSelect> 
          <H1><IMG src={clover} alt={"Logo"}/> LOTOFÁCIL</H1>
          <H3>
            Concurso <br/>
            2200 - {getCurrentDate()}
          </H3>
      </ConteinerMain>
      <ConteinerSecond>
        <BolinhaDiv>
          {loto.map(loto => {
            return(
              <div key={loto.id}>
                <Bolinha>{loto}</Bolinha>
              </div>
            )
          })}
        </BolinhaDiv>
        <h4>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</h4>
      </ConteinerSecond>
    </PageFull>       
  )
}

export default LotoFacilPage