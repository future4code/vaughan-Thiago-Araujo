import React, { useEffect, useState } from "react";
import BasicSelect from "../../components/Select/Select";
import { BASE_URL } from "../../constants/urls";
import { getCurrentDate } from "../../utils/data";
import { BolinhaDiv,Bolinha, ConteinerMain, ConteinerSecond, H1, H3, PageFull, IMG } from "./styled";
import clover from "../../assets/clover.png"

const LotoManiaPage = () => {

  const [loto, setLogo] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/concursos/2167`)
    .then(response => response.json())
    .then(data => setLogo(data.numeros))
  })
    
  return ( 
    <PageFull>
      <ConteinerMain> 
          <BasicSelect></BasicSelect>
          <H1><IMG src={clover} alt={"Logo"}/> LOTOMANIA</H1>
          <H3>
            Concurso <br/>
            2167 - {getCurrentDate()}
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

export default LotoManiaPage