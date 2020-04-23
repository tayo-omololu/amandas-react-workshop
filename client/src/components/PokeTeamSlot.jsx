import React from "react"
import PokeForm from "./addPokeForm"

//TODO
var PokeTeamSlot = (props) => {
  return props.poke ? (
  <div className="pokeTeamSlot">
    <div>Name: {props.poke.name} </div>
    <div>Id: {props.poke.id}</div>
    <img src={props.poke.sprites.front_default} alt="pokemon image"/>
    <form action="" method="get">
      <label for="name">Get pokemon</label>
      <input type="text"></input>
    </form>
  </div>
  ) : (
      <div>
        <PokeForm fetchPokemon={props.fetchPokemon} idx={props.idx}/>
      </div>
      )
}


export default PokeTeamSlot
