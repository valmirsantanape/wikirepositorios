import { Container } from "./styles";
import gitLogo  from '../image/githubLogo.png'
import { Input } from '../components/Input'
import { Button } from "../components/Button";
import { ItemRepo } from "../ItemRepo";
import { useState } from "react";
import { api } from '../service/api'

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [respos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    
    const {data} = await api.get(`repos/${currentRepo}`)
    if(data.id){
      const isExists = respos.find(repo => repo.id === data.id)
      if(isExists){
        setRepos(prev => [...prev, data]);
      setCurrentRepo('')
      return
      } 
    }
    alert(`Repositório não encontrado`)
  }

  const handleRemoveRepo = (id) => {
    //Codigo para remover repositorio'
    console.log("remoção de registro", id)
    
    //utilizar o filter.
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Github" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      
      <Button onClick={handleSearchRepo} />
      
      {respos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
