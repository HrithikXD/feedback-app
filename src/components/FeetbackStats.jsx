import React from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'
function FeetbackStats() {
    const {feedback} = useContext(FeedbackContext)
    let length = feedback.length
    let average = feedback.reduce((acc, cur)=>{
    return acc + cur.rating
  },0)/length
    average = average.toFixed(1).replace(/[.,]0$/,'')
      return (
        <div className='feedback-stats'>
            <h4>{length} Reviews</h4>
            <h4>Average Rating : {isNaN(average)? 0 : average}</h4>
        </div>
      )
  
}

export default FeetbackStats