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
      { index: 0, Q: 'Is the character male or female?'},
      { index: 1, Q: 'Do they have blonde hair?'},
      { index: 2, Q: 'Are they a current student at Hogwarts?'},
      ]
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

  // logic to decide if card should be turned over
  onSelectQuestion(selectedQuestion){
    console.log('got it')
    // if (this.state.questions.index === 0) && (this.cards.gender !== 'female') {
    //    hide the card 
    // }
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