import React from 'react'

class QuestionSelector extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      selectedIndex: undefined
    }
  }

  handleChange(event){
    const selectedQuestion = this.props.questions[event.target.value]
    this.onSelectQuestion(selectedQuestion)
  }

  onSelectQuestion(selectedQuestion){
    if ( selectedQuestion.index === 0 ) {
      this.testFemale()
      return
    }
    if ( selectedQuestion.index === 1 ) {
      this.testHairColour()
      return
    }
    if ( selectedQuestion.index === 2 ) {
      this.testGryffindor()
      return
    }
    if ( selectedQuestion.index === 3 ) {
      this.testSlytherin()
      return
    }
    if ( selectedQuestion.index === 4 ) {
      this.testMale()
      return
    }
  }

  testFemale(){
    if (this.props.randomCard.gender === 'female'){
      this.props.changeYesNoAnswer('Y')
      this.keepCharacters('female')
    }
    else {
      this.props.changeYesNoAnswer('N')
      this.removeCharacters('female')
    }
  }

  testMale(){
    if (this.props.randomCard.gender === 'male'){
      this.props.changeYesNoAnswer('Y')
      this.keepCharacters('male')
    }
    else {
      this.props.changeYesNoAnswer('N')
      this.removeCharacters('male')
    }
  }

  testHairColour(){
    if (this.props.randomCard.hairColour === 'blonde'){
      this.props.changeYesNoAnswer('Y')
      this.keepCharacters('blonde')
    }
    else {
      this.props.changeYesNoAnswer('N')
      this.removeCharacters('blonde')
    }
  }

  testGryffindor(){
    if (this.props.randomCard.house === 'Gryffindor'){
      this.props.changeYesNoAnswer('Y')
      this.keepCharacters('Gryffindor')
    }
    else {
      this.props.changeYesNoAnswer('N')
      this.removeCharacters('Gryffindor')
    }
  }

  testSlytherin(){
    if (this.props.randomCard.house === 'Slytherin'){
      this.props.changeYesNoAnswer('Y')
      this.keepCharacters('Slytherin')
    }
    else {
      this.props.changeYesNoAnswer('N')
      this.removeCharacters('Slytherin')
    }
  }

  keepCharacters(characteristic){
    const newCardsArray = []
    this.props.cards.forEach(function(card){
      if (card.gender === characteristic){
        newCardsArray.push(card) 
      }
      else if (card.hairColour === characteristic){
        newCardsArray.push(card)
      }
      else if (card.house === characteristic){
        newCardsArray.push(card)
      }
    })
    this.props.updateCards(newCardsArray)
  }

  removeCharacters(characteristic){
    let filteredArray = this.props.cards
    const cardsToRemove = []
    this.props.cards.forEach(function(card){
      if (card.gender === characteristic){
        cardsToRemove.push(card) 
      }
      else if (card.hairColour === characteristic){
        cardsToRemove.push(card)
      }
      else if (card.house === characteristic){
        cardsToRemove.push(card)
      }
    })
    filteredArray = filteredArray.filter(val => !cardsToRemove.includes(val))
    this.props.updateCards(filteredArray)
  }

  render(){
    const options = this.props.questions.map( (question, index) => {
      return <option value={index} key={index}>{question.Q}</option>
    } )

    return(
      <select id='questions' value={this.state.selectedIndex} onChange={this.handleChange.bind(this)} >
        <option value='-1' disabled>Select a question</option>
        { options }
      </select>
      )
  }

}

export default QuestionSelector