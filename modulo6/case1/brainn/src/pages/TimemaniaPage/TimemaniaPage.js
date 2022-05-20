import React, { useEffect, useState } from "react";
import BasicSelect from "../../components/Select/Select";
import { BASE_URL } from "../../constants/urls";
import { getCurrentDate } from "../../utils/data";
import { Bolinha, BolinhaDiv, ConteinerMain, ConteinerSecond, H1, H3, IMG, PageFull } from "./styled";
import clover from "../../assets/clover.png"

const TimemaniaPage = () => {

  const [time, setTime] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/concursos/1622`)
    .then(response => response.json())
    .then(data => setTime(data.numeros))
  })


    
  return ( 
    <PageFull>
      <ConteinerMain>
          <BasicSelect></BasicSelect> 
          <H1><IMG src={clover} alt={"Logo"}/> TIMEMANIA</H1>
          <H3>
            Concurso <br/>
            1622 - {getCurrentDate()}
          </H3>
      </ConteinerMain>
      <ConteinerSecond>
        <BolinhaDiv>
          {time.map(time => {
            return(
              <div key={time.id}>
                <Bolinha>{time}</Bolinha>
              </div>
            )
          })}
        </BolinhaDiv>
        <h4>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA</h4>
      </ConteinerSecond>
    </PageFull>       
  )
}

export default TimemaniaPage