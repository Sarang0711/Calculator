import React, {useState} from 'react';
import ReactDom from 'react-dom';
import ButtonBox from './components/ButtonBox';


// import Display from './components/Display';

function App() {
  const [num, setNum] = useState('');

  function handleClick(value, type) {

    type === 'delAll' && setNum('');
    type === 'equate'&& setNum(eval(num));
    (type === 'operator' || type === 'operand') && setNum(num + value);
    type === 'del' && setNum(num.toString().slice(0, -1));
    // ? when once equate is called then it converts string into number so we have to convert it again into string to apply del
  }
  return (
    <div className='display'>
    <div className='screen'>
      {num}
    </div>
    <ButtonBox btnPressed={handleClick}/>
  </div>

  )
}

export default App;