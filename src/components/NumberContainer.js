import React from 'react'
import Number from './Number'

const NumberContainer = (props) => {



  return (
    <div className='container grid-x-center grid grid-col-6 number-container'>
        {Array.from({length: 20}, (_, i) => i + 1).map((e)=> {
            return <Number key={e} clickNumber={props.onNumberClick} value={e} selected={props.selectedNumbers.includes(e)} />
        })}
        <button className='btn other-button' onClick={e=> {
          props.onRandom();
          props.onCash(false);
        }}>Random</button>

        <button className='btn other-button' onClick={e=>props.onCash(true)}>Cash</button>
        
        <button className='btn other-button' onClick={e=> {
          props.onClear()
          props.onCash(false);
        }}>Clear</button>
    </div>
  )
}

export default NumberContainer