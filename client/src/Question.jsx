import React from 'react'

class Question extends React.Component {
  
  constructor(props){
    super(props)
    // this.state = {

    // }
  }

  render(){
    return(
      <div>
        {this.props.question}
      </div>
    )
  }
}

export default Question