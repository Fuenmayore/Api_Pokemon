
import './App.css';
import { useEffect, useState } from "react";
import PokemonThumnail from './PokemonThumnail'

import { useAuth0 } from '@auth0/auth0-react'





function App(props) {
  const {isAuthenticated} = useAuth0();
  const [allPokemons, setAllPokemons] = useState([])
  const [loadMore, setLoadMore] = useState(`https://pokeapi.co/api/v2/pokemon?limit=40`)
  
  
  const getAllPokemons = async ()=> {
    const res = await fetch(loadMore)
    const data = await res.json()
  
    setLoadMore(data.next)
  
  
    function createPokemonObject (result){
      result.forEach(async (pokemon)=> {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
  
        setAllPokemons(currentList => [...currentList, data])
        
      })
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }
  useEffect(() => {
   getAllPokemons()
  }, [])
  


  return (
    isAuthenticated && (
    <div className="app-container">
      <br/>
    <center><img src='logo1.png' alt='pokemon' width='15%' height="15%"/></center> 
    <br/>
    
     <div className="pokemon-container"> 
     <div className="all-container">
       
     
     { allPokemons.map((Pokemon, index) =>
      <PokemonThumnail
      id={Pokemon.id}
      name={Pokemon.name}
      image={Pokemon.sprites.other.dream_world.front_default}
      
      type={Pokemon.types[0].type.name}
      link= {Pokemon}
      ability= {Pokemon.abilities[0].ability.name}
     
      
      key={index}
     
      />)}

      
     
       </div>
      <button className="load-more" onClick={() => getAllPokemons()}>load more</button>
      </div>
    </div>
   
   )
  );
}

export default App;
