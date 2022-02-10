import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Match from "./Componentes/Match"
import Profiles from "./Componentes/Profiles";

const Div1 = styled.div`
  display: grid;`

const Container = styled.div`
    height: 600px;
    border:solid 1px;
    border-radius:20px;
   display:grid;
   display:flex;
   flex-direction: column;
   align-content: space-between;
    justify-items: center;
`
const Div = styled.div`
 display: flex;
 justify-content: space-around;
 
`
const Img = styled.img`
  width: 30%;
`
const Button = styled.button`
  width: 20%;
`
const ImgButton = styled.img`
  width:100%;
`

const ImgPessoa = styled.div`
  width:50%;
  height: 300px;
  border-style: groove;
  background-size: 100% 100%;
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  font-family: Helvetica;
  color: white;
  `

export default function App() {
  const [listaPessoas, setlistaPessoas] = useState([]);
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState("");

  const listadepessoa = (event) => {
  setlistaPessoas(event.target.value);
}

  const pegarPessoa = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vaughan/person`)
      .then((resposta) => {
        setFoto(resposta.data.profile.photo)
        setName(resposta.data.profile.name)
        setBio(resposta.data.profile.bio)
        setAge(resposta.data.profile.age)
        setId(resposta.data.profile.id)

  const [page, setPage] = useState("profiles");


      }).catch((erro) => {
        console.log(erro.response);
      })
  const mudarParaMatch = () => {
    setPage("matches")
  }

  const escolherPessoa = (choice) =>{
    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vaughan/choose-person`, { id: id, choice: choice})
    .then(() => {
      pegarPessoa()
    }).catch((erro) => {
      console.log(erro.response);
    })
  const mudarParaProfiles = () => {
    setPage("profiles")
  }

  useEffect(() => {
    pegarPessoa();
  }, []);

  const selectPage = () => {
    switch(page){
      case "profiles":
        return <Profiles  mudarParaMatch={mudarParaMatch}/>
      case "matches":
        return <Match mudarParaProfiles={mudarParaProfiles} />
      default:
        return <Profiles  mudarParaMatch={mudarParaMatch}/>

    }
  }


  return (
    <Div1>
      <Container className="App">
        <Div>
          <h2>VAPO VAPO</h2>
          <Button type="button"><ImgButton src="https://th.bing.com/th/id/R.2531c7bc81c811daf7ce0631f7f8f245?rik=mG2bB9yH82lgFA&pid=ImgRaw&r=0" /></Button>
        </Div>

        <ImgPessoa style={{ backgroundImage: `url(${foto})`}}>

          <h3>{name}, {age}</h3>
          <p>{bio}</p>
        </ImgPessoa>

        <Div>
          <Button onClick={() => escolherPessoa(false)}> <Img src="https://th.bing.com/th/id/R.515a8436981dce0cb5e3347fc152522f?rik=R%2bfuukLKC0pWBw&riu=http%3a%2f%2fimages.emojiterra.com%2fmozilla%2f512px%2f274c.png&ehk=OC2l%2fP9%2bUdpo%2bp1F8TbAE%2bIf9f7540RjBNdbsLY2obE%3d&risl=&pid=ImgRaw&r=0"></Img></Button>
          <Button onClick={() => escolherPessoa(true)}> <Img src="https://http2.mlstatic.com/D_NQ_NP_756824-MLB29124886020_012019-F.jpg" /></Button>
        </Div>

        {selectPage()}
      </Container>
    </Div1>
  );
}}}