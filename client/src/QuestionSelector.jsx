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
    this.props.onSelectQuestion(selectedQuestion, this.props.randomCard)
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