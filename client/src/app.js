import React from 'react'
import ReactDOM from 'react-dom'
import GameContainer from './GameContainer'

window.onload = function(){
  ReactDOM.render(
    <GameContainer/>,
    document.getElementById('app')
  )
}
