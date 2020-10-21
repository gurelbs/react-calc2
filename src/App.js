import React, {useState} from 'react';
import Calc from './Calc'

export default function App() {

const [leftDigit, setLeftDigit] = useState(0);
const [rightDigit, setRightDigit] = useState(0);
const [operator, setOperator] = useState('');
const [result, setResult] = useState(0)
const [historyList, setHistoryList] = useState([])

const digitPressed = digit => {
  if (!operator){
    setLeftDigit(digit);
  } else {
    setRightDigit(digit)          
  }
}
const operatorPressed = char => {
  setOperator(char);
}
const rightDigitPressed = digit => {
  setRightDigit(digit);
}

const findOpertor = () => {
  let res = 0;
  switch (operator) {
    case '+':
      res = leftDigit + rightDigit;
      break;
    case '-':
      res = leftDigit - rightDigit;
      break;
    case '*':
      res = leftDigit * rightDigit;
      break;
    case '/': 
      res = leftDigit / rightDigit;
      break;
      default:
        res = undefined;
  }
  setResult(res)
  setHistoryList([...historyList, `${leftDigit} ${operator} ${rightDigit} = ${res}`])
}

const clear = () => {
  setRightDigit(0);
  setLeftDigit(0);
  setOperator('');
  setResult(0);
}

  return (
      <div className="container-fluid bg-dark text-light text-center border border-info">
          <div className="row p-5">
            <div className="col border-bottom">{leftDigit}</div>           
            <div className="col-2 h4">{operator}</div>           
            <div className="col border-bottom">{rightDigit}</div>           
            <div className="col-2 h4">=</div>           
            <div className="col border-bottom">{result}</div>           
          </div>
          <div className="row px-3">
          <div className="col-lg-9 text-center">
            <Calc 
              onBtnPressed={digitPressed}
              operatorPressed={operatorPressed}
              findOpertor={findOpertor}
              clear={clear}
            />  
          </div>           
          <div className="col-lg-3">
              <h3 className="h3">History</h3>
              <ol>
                {
                  historyList.map(item => <li>{item}</li>)
                }
              </ol>
            </div>           
          </div>
      </div>
    );
}