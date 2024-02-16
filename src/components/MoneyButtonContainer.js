import React from 'react';
import MoneyButton from './MoneyButton';
import Lottery from '../Lottery-Balls.jpg'

const MoneyButtonContainer = (props) => {

  const moneyOptions = [1, 5, 10, 20];

  return (
    <div>
      <img className='img' src={Lottery} alt='lottery balls' />
      <div className='container grid-x-center grid grid-col-2 money-button-container'>
          {moneyOptions.map((e)=>{
              return <MoneyButton key={e} money={e} onMoneyClick={props.onMoneyClick} />
          })}
      </div>
    </div>
  )
}

export default MoneyButtonContainer