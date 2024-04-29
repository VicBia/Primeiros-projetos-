import { useState, useEffect } from 'react'
import reactLogo from './assets/poke.svg'
import './App.css'
import axios from 'axios'
import Post from './components/post'


function App() {
  const [data, setData] = useState()

  useEffect(() =>{
    async function getData(){
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      setData(response.data)
    }
    getData()
  }, [])
  useEffect(() =>{
    console.log(data)
  }, [data])
  
  return (
    <div className="App">
      <div>
        <a target="_blank">
          <img src="/pok.png" className="logo" alt="Poke logo" />
        </a>
      </div>

      <div>
        <input type="text" name="pesquisa" placeholder="Pesquisar pokémon"></input>
        <h1>Pokédex</h1>
      </div>
      
      <div className="cards">
      {data?  data.results.map((post, i) => {
        return(<Post titulo = {post.name} conteudo = {post.url} key={i}/>) 
        }) : <p>Carregando</p>}
       
      {data? console.log(data): console.log("sem mais dados")}
      
      {data? console.log(data.results[1]): console.log("sem mais dados")} 
      </div>
      
      <footer>
        <p>Com 💛 Info Jr UFBA 2022</p>
      </footer>

    </div>
  )
  

}

export default App
