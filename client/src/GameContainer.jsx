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
      { index: 2, Q: 'Are they in Gryffindor?'},
      { index: 3, Q: 'Are they in Slytherin?'},
      ],
      randomCard: undefined
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

  // logic to decide if card should be turned over
  // onSelectQuestion(selectedQuestion, randomCard){
  //   console.log(randomCard)
  //   if ( selectedQuestion.index === 0 ) {
  //     if (randomCard.gender === "female") {
  //       console.log('YES')  
  //     }
  //     else {
  //       console.log('NO')
  //     }
  //     return
  //   }    
  //   else if ( selectedQuestion.index === 1 ) {
  //     if (randomCard.hairColour === "blonde") {
  //       console.log('YES')  
  //     }
  //     else {
  //       console.log('NO')
  //     }
  //     return
  //   }
  //   else if ( selectedQuestion.index === 2 ) {
  //     if (randomCard.house === "Gryffindor") {
  //       console.log('YES')  
  //     }
  //     else {
  //       console.log('NO')
  //     }
  //     return
  //   }
  //   else if ( selectedQuestion.index === 3 ) {
  //     if (randomCard.house === "Slytherin") {
  //       console.log('YES')  
  //     }
  //     else {
  //       console.log('NO')
  //     }
  //     return
  //   }
  // }

  render() {
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
          <QuestionSelector questions={this.state.questions} onSelectQuestion={this.onSelectQuestion} randomCard={this.state.randomCard} />
          <h4>YES or NO</h4>
        </section>
      </div>
    )
  }

}

export default GameContainer