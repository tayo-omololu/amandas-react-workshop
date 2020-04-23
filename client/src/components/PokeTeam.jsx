import React from "react"
import PokeTeamSlot from "./PokeTeamSlot"


//TODO
var PokeTeam = (props) => (
<div id="pokeTeam">
  {props.pokes.map((poke, idx) => 
  <PokeTeamSlot poke={poke} key={idx} idx={idx} fetchPokemon={props.fetchPokemon}/>
  )}
</div>
);

export default PokeTeam
