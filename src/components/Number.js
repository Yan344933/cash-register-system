import React from 'react'

const Number = (props) => {
  
  return (
    <div>
        <button className={props.selected? 'btn number-button select' : 'btn number-button'} onClick={()=>{
          props.clickNumber(props.value);
        }}>{props.value}</button>
    </div>
  )
}

export default Number