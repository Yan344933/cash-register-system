import '../css/App.css';
import Header from './Header';
import { useState } from 'react';
import MoneyButtonContainer from './MoneyButtonContainer';
import InfoContainer from './InfoContainer';
import NumberContainer from './NumberContainer';

function App() {

  const [selectedNumbers, setselectedNumbers] = useState([]);
  const [ticketValue, setTicketValue] = useState(0);
  const [isCash, setisCash] = useState(false);

  const clickNumber = (num) =>{
    if(selectedNumbers.includes(num))
      removeselectedNumbers(num);
    else addselectedNumbers(num);
  }

  const addselectedNumbers = (num)=> {
    if(selectedNumbers.length === 5)
      alert('You already select 5 number!');
    else setselectedNumbers([...selectedNumbers, num]);
  }

  const removeselectedNumbers = (num) => {
    const newNumbers = selectedNumbers.filter((n) => n !==num);
    setselectedNumbers(newNumbers);
  }

  const addTicketValue = (money) => {
    if(selectedNumbers.length < 5)
      alert('Select 5 numbers first!');
    else
      setTicketValue(ticketValue + money);
  }

  const clearAll = () =>{
    setselectedNumbers([]);
    setTicketValue(0);
  }

  const random = () =>{
    clearAll();
    let newNumbers = [];
    let num = 0;
    for(let i = 0; i < 5; i++){
      do{
        num = Math.floor(Math.random() * 20) + 1;
      }while(newNumbers.includes(num));
      newNumbers = [...newNumbers, num];
    }

    setselectedNumbers(newNumbers);
  }

  const onCash = (val) =>{
    setisCash(val);
  }

  return (
    <>
      <Header />
      <div className='container main-container grid grid-col-3'>
        <MoneyButtonContainer onMoneyClick={addTicketValue}/>
        <NumberContainer selectedNumbers={selectedNumbers} onNumberClick={clickNumber} onClear={clearAll} onRandom={random} onCash={onCash}/>
        <InfoContainer numbers={selectedNumbers} ticketValue={isCash?ticketValue:0} />
      </div>
    </>
  );
}

export default App;
