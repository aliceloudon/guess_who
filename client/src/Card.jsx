import React from 'react'

class Card extends React.Component {
  
  constructor(props){
    super(props)
    // this.state = {

    // }
  }

  render(){
    return(
      <div className='card'>
        <img src={this.props.image}/>
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

export default Card