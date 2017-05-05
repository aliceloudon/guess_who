import React from 'react'
import Card from './Card'
import Question from './Question'
import QuestionSelector from './QuestionSelector'

class GameContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      cards: [],
      questions: [
      { index: 0, Q: 'Is the character female?'},
      { index: 1, Q: 'Do they have blonde hair?'},
      { index: 2, Q: 'Are they a current student at Hogwarts?'},
      ],
      randomCard: []
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
        this.selectRandomCard()
      }
    }
    request.send()
  }

  // Randomly select a card
  selectRandomCard(){
    let cardArray = this.state.cards
    let randomCard = cardArray[Math.floor(Math.random()*cardArray.length)]
    this.setState( {randomCard: randomCard} )
    console.log(this.state.randomCard)
  }

  // logic to decide if card should be turned over
  onSelectQuestion(selectedQuestion){
    if ( selectedQuestion.index === 0 ) {
      console.log('ready to hide male cards')
      return
    }    
    else if ( selectedQuestion.index === 1 ) {
      console.log('ready to hide cards with blonde hair')
      return
    }
    else if ( selectedQuestion.index === 2 ) {
      console.log('ready to hide cards which are not students')
      return
    }
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
        <section className='question-section'>
          <h2>Select a question to ask</h2>
          <QuestionSelector questions={this.state.questions} onSelectQuestion={this.onSelectQuestion}/>
        </section>
      </div>
    )
  }

}

export default GameContainer