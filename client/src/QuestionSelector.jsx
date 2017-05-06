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
      console.log('YES')
    }
    else {
      console.log('NO')
    }
  }

  testHairColour(){
    if (this.props.randomCard.hairColour === 'blonde'){
      this.props.changeYesNoAnswer('Y')
      // console.log('YES')
    }
    else {
      this.props.changeYesNoAnswer('N')
      // console.log('NO')
    }
  }

  testGryffindor(){
    if (this.props.randomCard.house === 'Gryffindor'){
      console.log('YES')
    }
    else {
      console.log('NO')
    }
  }

  testSlytherin(){
    if (this.props.randomCard.house === 'Slytherin'){
      console.log('YES')
    }
    else {
      console.log('NO')
    }
  }

  render(){
    const options = this.props.questions.map( (question, index) => {
      return <option value={index} key={index}>{question.Q}</option>
    } )

    return(
      <select id='questions' value={this.state.selectedIndex} onChange={this.handleChange.bind(this)} >
      { options }
      </select>
      )
  }

}

export default QuestionSelector