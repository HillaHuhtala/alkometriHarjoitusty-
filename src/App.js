import './App.css';
import { useState } from 'react';


function App() {
  const [weight, setWeight] = useState('undefined');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('female');
  const [result, setResult] = useState(0);

  function calculateResult(e){
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    grams = grams - (burning * time);

    let result = 0;
    if (gender === 'male') {
      result = grams / (weight * 0.7);
      if (result < 0){
        result = 0;
      }
    } 
    else {
      result = grams / (weight * 0.6);
      if (result < 0){
        result = 0;
      }
    }

    setResult(result);
  };


  return (
    <>
      <h1>Calculating alcohol blood level</h1>
      <form onSubmit={calculateResult}>
        <div>
          <label className='bold'>Weight</label>
          <input name='weight' type='number' id='weight' required value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
          <label className='bold'>Bottles</label>
          <input name='bottles' type='number' id='bottles' min='0' max='100' step='1' value={bottles} onChange={e => setBottles(e.target.value)}></input>
        </div>
        <div>
          <label className='bold'>Time</label>
          <input name='time' type='number' id='time' min='0' max='72' step='1' value={time} onChange={e => setTime(e.target.value)}></input>
        </div>
        <div>
          <label className='bold'>Gender</label>
          <input name='gender' type='radio' id='female' value='female' defaultChecked onChange={e => setGender(e.target.value)}></input>
          <label for='female'>Female</label>
          <input name='gender' type='radio' id='male' value='male' onChange={e => setGender(e.target.value)}></input>
          <label for='male'>Male</label>
        </div>
        <div>
          <button>Calculate</button>
        </div>
        <div>
          <h3>Calculated alcohol blood level is:</h3>
          <output>{result.toFixed(2) + ' promilles'}</output>
        </div>
      </form>
    </>
  );
};

export default App;
