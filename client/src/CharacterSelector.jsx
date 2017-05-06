import React from 'react'

class CharacterSelector extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event){
    const selectedCharacter = this.props.cards[event.target.value]
    console.log('clicked')
  }

  render(){
    const options = this.props.characters.map( (character, index) => {
      return <option value={index} key={index}>{character.name}</option>
    } )

    return(
      <select id='characters' value={this.state.selectedIndex} onChange={this.handleChange.bind(this)} >
        <option value='-1' disabled>Select a character</option>
        { options }
      </select>
    )
  }

}

export default CharacterSelector