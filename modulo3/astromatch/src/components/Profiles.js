import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import App from "../App";

const Div = styled.div`
 display: flex;
 justify-content: space-around;
 
`
const Button = styled.button`
  width: 20%;
  height: 60%;
  margin-top: 20px;
`
const ImgButton = styled.img`
  width:60%;
`
const H2 = styled.h2`
      background-image: linear-gradient(to right, red , yellow); 
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
const Img = styled.img`
  width: 30%;
`
export default function Profiles(props) {
  const [listaPessoas, setlistaPessoas] = useState([]);
  const [name, setName] = useState("");
  const [foto, setFoto] = useState("");
  const [bio, setBio] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState("");



  const pegarPessoa = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/grazielle/person`)
      .then((resposta) => {

        setFoto(resposta.data.profile.photo)
        setName(resposta.data.profile.name)
        setBio(resposta.data.profile.bio)
        setAge(resposta.data.profile.age)
        setId(resposta.data.profile.id)
        setlistaPessoas(resposta.data.profile)

      }).catch((erro) => {
        console.log(erro.message);
      })
  }
  const escolherPessoa = (choice) =>{
    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/grazielle/choose-person`, { id: id, choice: choice})
    .then(() => {
      pegarPessoa()
    }).catch((erro) => {
      console.log(erro.response);
    })
  }
  useEffect(() => {
    pegarPessoa();
  }, []);

  return (
    <div>
      <Div>
        <H2>Astromatch</H2>
        <Button onClick={() => props.mudarParaMatch()}><ImgButton src="https://png.pngtree.com/png-vector/20190226/ourlarge/pngtree-fire-logo-icon-design-template-vector-png-image_705401.jpg" /></Button>
      </Div>
      <Div>
        <ImgPessoa style={{ backgroundImage: `url(${foto})` }}>

          <h3>{name}, {age}</h3>
          <p>{bio}</p>
        </ImgPessoa>
      </Div>
      <Div>
        <Button onClick={() => escolherPessoa(false)}> <Img src="https://th.bing.com/th/id/R.515a8436981dce0cb5e3347fc152522f?rik=R%2bfuukLKC0pWBw&riu=http%3a%2f%2fimages.emojiterra.com%2fmozilla%2f512px%2f274c.png&ehk=OC2l%2fP9%2bUdpo%2bp1F8TbAE%2bIf9f7540RjBNdbsLY2obE%3d&risl=&pid=ImgRaw&r=0"></Img></Button>
        <Button onClick={() => escolherPessoa(true)}> <Img src="https://http2.mlstatic.com/D_NQ_NP_756824-MLB29124886020_012019-F.jpg" /></Button>
      </Div>
    </div>
  )
}