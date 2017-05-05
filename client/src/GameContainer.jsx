import React from 'react'
import Card from './Card'

class GameContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      cards: [
      { name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg' },
      { name: 'Hermione Granger', image: 'http://hp-api.herokuapp.com/images/hermione.jpeg' },
      { name: 'Ron Weasley', image: 'http://hp-api.herokuapp.com/images/ron.jpg' }
      ]
    }
  }

  render(){
    const gameCards = this.state.cards.map( (card, index) => {
      return <Card key={index} name={card.name}></Card>
    })
    return(
      <div>
        <h1>Guess Who</h1>
        {gameCards}
      </div>
    )
  }

}

export default GameContainer