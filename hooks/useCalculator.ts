import React, { useRef, useState } from 'react'

enum Operations {
  sum,rest,multuply,divide
}


export const useCalculator = () => {

  const [number, setNumber] = useState('0');
  const [numberBefore, setNumberBefore] = useState('0')

  const lastOperation = useRef<Operations>()


  const clearNumber = () =>{
    setNumber('0')
  }

  const numerAppend = (numberText :string)=>{

    if (numberText === '.' && number.includes('.')) return;        
     setNumber(number!=='0' || numberText === '.'? number+numberText: numberText)    


  }

  const odd = ()=>{
    if(number.includes('-')){
      setNumber( number.replace('-','') )      
    }else{
      setNumber( '-'+number )      

    }
  }

  const delNumber = () =>{
    if( number.length === 1 || ( number.length === 2 && number.includes('-'))  ){
       setNumber('0')
      }else{
        setNumber( number.slice(0,-1) )

      }

  }

  const changeNumbers = ()=>{

    if(number.endsWith('.')){
      setNumberBefore( number.slice(0,-1) )
    }else{
      setNumberBefore( number )
    }
    setNumber('0')

  }

  const btnDivide = ()=>{
    changeNumbers()
    lastOperation.current = Operations.divide
  }

  const btnMultiply = ()=>{
    changeNumbers()
    lastOperation.current = Operations.multuply
  }
  const btnRest = ()=>{
    changeNumbers()
    lastOperation.current = Operations.rest
  }
  const btnSum = ()=>{
    changeNumbers()
    lastOperation.current = Operations.sum
  }

  const calculation = ()=>{

    if(numberBefore === '0') return

    const number1 = Number( number );
    const number2 = Number( numberBefore );

    switch (lastOperation.current) {
      case Operations.sum:
        setNumber( `${ number1 + number2 }` )
        break;

      case Operations.rest:
      setNumber( `${ number2 -number1  }` )
      break;

    case Operations.multuply:
      setNumber( `${ number1 * number2 }` )
      break;

    case Operations.divide:
    setNumber( `${ number2 / number1 }` )
    break;
    
    }

    setNumberBefore('0');
  
  }

  return {
    numberBefore,
    clearNumber,
    odd,
    delNumber,
    btnDivide,
    btnMultiply,
    btnRest,
    btnSum,
    calculation,
    numerAppend,
    number
  
  }
  
}
