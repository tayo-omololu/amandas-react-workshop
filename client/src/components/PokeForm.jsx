import React from "react"

class PokerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleChange = this.handleChange.bibd(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.id, event.target.value)
        this.setState({
            [`index${event.target.id}`] : event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        let query = this.state[`index${event.target.id}`]
        this.props.fetchPokemon(query, event.target.id)
    }

    render() {
        return (
            <form type="submit" className="pokeTeamSlot" id={this.props.idx}>
                Enter a Pokemon Name or ID
                <input id={this.props.idx} onChange={(e) => this.handleChange(e)}/>
                <button>Add Pokemon</button>
            </form>
        )
    }
}

export default Pokeform