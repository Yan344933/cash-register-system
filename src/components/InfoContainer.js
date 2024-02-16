import React from 'react'

const InfoContainer = (props) => {
  return (
    <div className='container grid-x-left info-container grid'>
        <div className='grid-y-top'>
            <p>Numbers selected:</p>
        
            {props.numbers.map((e)=>{
            return <p key={e}>Mark: {e}</p>
            })}
        </div>
        <div className='grid-y-bottom'>
            <p>Total: ${props.ticketValue}.00</p>
        </div>
    </div>
  )
}

export default InfoContainer