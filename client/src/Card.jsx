import React from 'react'

class Card extends React.Component {
  
  constructor(props){
    super(props)
    // this.state = {

    // }
  }

  render(){
    return(
      <div>
        {this.props.name}
        <img src={this.props.image}/>
      </div>
    )
  }
}

export default Card