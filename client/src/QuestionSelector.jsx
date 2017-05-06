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
      this.testMaleFemale()
      this.removeMaleCharacters()
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
  }

  testMaleFemale(){
    if (this.props.randomCard.gender === 'female'){
      this.props.changeYesNoAnswer('Y')
    }
    else {
      this.props.changeYesNoAnswer('N')
    }
  }

  removeMaleCharacters(){
    const newCardsArray = []
    this.props.cards.forEach(function(card){
      if (card.gender === 'female'){
        newCardsArray.push(card)
      }
    })
    // console.log(newCardsArray)
    this.props.updateCards(newCardsArray)
  }

  testHairColour(){
    if (this.props.randomCard.hairColour === 'blonde'){
      this.props.changeYesNoAnswer('Y')
    }
    else {
      this.props.changeYesNoAnswer('N')
    }
  }

  testGryffindor(){
    if (this.props.randomCard.house === 'Gryffindor'){
      this.props.changeYesNoAnswer('Y')
    }
    else {
      this.props.changeYesNoAnswer('N')
    }
  }

  testSlytherin(){
    if (this.props.randomCard.house === 'Slytherin'){
      this.props.changeYesNoAnswer('Y')
    }
    else {
      this.props.changeYesNoAnswer('N')
    }
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