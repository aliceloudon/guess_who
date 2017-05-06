import React from 'react'
import Card from './Card'
import Question from './Question'
import QuestionSelector from './QuestionSelector'
import CharacterSelector from './CharacterSelector'

class GameContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      cards: [],
      questions: [
      { index: 0, Q: 'Is the character female?'},
      { index: 1, Q: 'Do they have blonde hair?'},
      { index: 2, Q: 'Are they in Gryffindor?'},
      { index: 3, Q: 'Are they in Slytherin?'},
      { index: 4, Q: 'Are they male?'},
      ],
      randomCard: undefined,
      answer: '',
      revealCharacter: ''
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
        this.setState({ randomCard: data[Math.floor(Math.random()*data.length)] })
      }
    }
    request.send()
  }

  changeYesNoAnswer(answer){
    if (answer === 'Y'){
      this.setState( { answer: 'YES' } )
    }
    else {
      this.setState( { answer: 'NO' } )
    }
  }

  updateRevealCharacter(character){
    this.setState( {revealCharacter: character.name} )
  }

  updateCards(newCardsArray){
    this.setState( {cards: newCardsArray} )
  }

  render() {
    const gameCards = this.state.cards.map( (card, index) => {
      return <Card key={index} name={card.name} image={card.image}></Card>
    })

    return(
      <div>
        <h1>Guess Who</h1>
          <section className='question-section'>
            <h2>Select a question to ask</h2>
            <QuestionSelector 
              questions={this.state.questions} 
              cards={this.state.cards} 
              randomCard={this.state.randomCard} 
              onSelectQuestion={this.onSelectQuestion} 
              changeYesNoAnswer={this.changeYesNoAnswer.bind(this)} 
              updateCards={this.updateCards.bind(this)}
            />
            <h4>{this.state.answer}</h4>
            <h2>Take a guess</h2>
            <CharacterSelector
              cards={this.state.cards}
              randomCard={this.state.randomCard} 
              onSelectCharacter={this.onSelectCharacter}
              updateRevealCharacter={this.updateRevealCharacter.bind(this)}
            />
            <h4>The answer is... {this.state.revealCharacter}</h4>
          </section>
          <div className='card-container'>
            {gameCards}
          </div>
      </div>
    )
  }

}

export default GameContainer