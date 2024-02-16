import React from 'react'

const MoneyButton = (props) => {
  return (
    <div>
        <button className='btn money-button' onClick={()=>{
          props.onMoneyClick(props.money)
        }}>${props.money}</button>
    </div>
  )
}

export default MoneyButton