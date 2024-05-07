import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Header(props) {
  const hS = {backgroundColor: props.bgColor, color:props.textColor}
  return (
    <Link to="/" style={{textDecoration:'none'}} >
    <header style={hS}>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
    </header>
    </Link>
  ) 
}


Header.propTypes = {
  text : PropTypes.string,
  bgColor : PropTypes.string,
  textColor : PropTypes.string
}

export default Header