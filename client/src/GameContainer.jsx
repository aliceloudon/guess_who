import React from 'react'
import Card from './Card'

class GameContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    const url = 'http://hp-api.herokuapp.com/api/characters'
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText
        const data = JSON.parse(jsonString)
        this.setState({ cards: data })
      }
    }
    request.send()
  }

  render(){
    const gameCards = this.state.cards.map( (card, index) => {
      return <Card key={index} name={card.name} image={card.image}></Card>
    })
    return(
      <div>
        <h1>Guess Who</h1>
          <div className='card-container'>
            {gameCards}
          </div>
      </div>
    )
  }

}

export default GameContainer