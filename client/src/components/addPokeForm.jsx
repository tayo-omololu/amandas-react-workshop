import React from "react"
import ReactDOM from 'react-dom';
import PokeTeam from "./PokeTeam"
import getPokemon from "../../../lib/getPokemon"
import examplePokeTeam from "../../../data/examplePokeTeam"

class PokeForm extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            // formData: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log(event.target.id, event.target.value)
        this.setState({
            [`index${event.target.id}`] : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        var query = this.state[`index${event.target.id}`]
        this.props.fetchPokemon(query, event.target.id)
    }

    render() {
        return (
            <form type="submit" className="pokeTeamSlot" id={this.props.idx} onSubmit={(e) => this.handleSubmit(e)}>
                <label for="name"> name/id </label>
                <input id={this.props.idx} onChange={(e) => this.handleChange(e)}></input>
                <button> Add Pokemon </button>
            </form>
        );
    }
}

export default PokeForm