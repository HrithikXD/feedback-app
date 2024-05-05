import React from 'react'
import PropTypes from 'prop-types'
function Card( {children, reverse=false} ) {


  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>

    // <div className="card" style={{backgroundColor : reverse ? 'rgba(0,0,0,0.4)' : '#ffff', color : reverse ? '#fff' : '#000'}}>{children}</div>

  )
}

Card.propTypes = {
  children : PropTypes.node.isRequired,
  reverse : PropTypes.bool
}

export default Card