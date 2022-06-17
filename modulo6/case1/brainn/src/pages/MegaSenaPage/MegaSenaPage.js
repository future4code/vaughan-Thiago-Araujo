import React, { useEffect, useState } from "react";
import BasicSelect from "../../components/Select/Select";
import { BASE_URL } from "../../constants/urls";
import { getCurrentDate } from "../../utils/data";
import { Bolinha, BolinhaDiv, ConteinerMain, ConteinerSecond, H1, H3, IMG, PageFull } from "./styled";
import clover from "../../assets/clover.png"

const MegaSenaPage = () => {

  const [mega, setMega] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/concursos/2359`)
    .then(response => response.json())
    .then(data => setMega(data.numeros))
  })
    
  return ( 
    <PageFull>
      <ConteinerMain> 
          <BasicSelect></BasicSelect> 
          <H1><IMG src={clover} alt={"Logo"}/> MEGA-SENA</H1>
          <H3>
            Concurso <br/>
            2359 - {getCurrentDate()}
          </H3>
      </ConteinerMain>
      <ConteinerSecond>
        <BolinhaDiv>
          {mega.map(mega => {
            return(
              <div key={mega.id}>
                <Bolinha>{mega}</Bolinha>
              </div>
            )
          })}
        </BolinhaDiv>
        <div>
          <h4>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</h4>
        </div>
      </ConteinerSecond>
    </PageFull>       
  )
}

export default MegaSenaPage