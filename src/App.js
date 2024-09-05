import Input from './components/Input'
import Button from './components/Button'
import { Container, Content, Row} from './styles'
import { useState } from 'react'

const App= () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')


  const handleAddNumber = (number) =>{
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  const handleDivNumber = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      if (currentNumber === '0') {
        alert("Error!");
        return;
      }
      
      const result = Number(firstNumber) / Number(currentNumber);
  
      if (Number.isInteger(result)) {
        setCurrentNumber(String(result));
      } else {
        setCurrentNumber(result);
      }
  
      setFirstNumber('0');
      setOperation('');
    }
  };
  
  

  const handleMultNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const sub = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sub))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleSubNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        case '*':
          handleMultNumber();
          break;
      default: break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="x" onClick={handleMultNumber}/>
          <Button label="/" onClick={handleDivNumber}/>
          <Button label="C" onClick={handleOnClear}/>
          <Button label="-" onClick={handleSubNumber}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="+" onClick={handleSumNumber}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
