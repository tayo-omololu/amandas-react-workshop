import React from "react"
// import ReactDOM from 'react-dom';
import PokeTeam from "./PokeTeam"
import getPokemon from "../../../lib/getPokemon"
import examplePokeTeam from "../../../data/examplePokeTeam"


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonTeam : [null, null, null, null, null]
    }
    this.fetchPokemon = this.fetchPokemon.bind(this)
  }

  fetchPokemon(query, index) {
    getPokemon(query, (data) => {
      console.log(data.data);
      var updatedSlot = this.state.pokemonTeam.slice();
      updatedSlot[index] = data.data;
      this.setState({
        pokemonTeam : updatedSlot
      })
    })
  }

  componentDidMount() {
    // this.fetchPokemon(1)
  }

  render() {
    return (
<div>
  <h1>My PokeTeam</h1>
  <PokeTeam  pokes={this.state.pokemonTeam} fetchPokemon={this.fetchPokemon}/>
</div>
    );
  }
}


export default App

