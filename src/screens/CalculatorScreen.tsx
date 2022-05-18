import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { styles } from '../theme/appTheme'
import ButtonCalc from '../components/ButtonCalc'
import { useCalculator } from '../../hooks/useCalculator'



export default function CalculatorScreen() {

  const {
    number,
    numerAppend,
    numberBefore,
    clearNumber,
    odd,
    delNumber,
    btnDivide,
    btnMultiply,
    btnRest,
    btnSum,
    calculation} = useCalculator()


  return (
    <View style={styles.calculatorContainer}>
      
    {
      numberBefore === '0' || <Text style={styles.preResult}> {numberBefore} </Text>
    }

      <Text style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
      > { number } </Text>

      {/* fila de botones < */}
      <View style={styles.styleRow}>
          <ButtonCalc text='C' color='#9B9B9B'  acction={clearNumber}/>
          <ButtonCalc text='+/-' color='#9B9B9B'  acction={odd}/>
          <ButtonCalc text='del' color='#9B9B9B'  acction={delNumber}/>
          <ButtonCalc text='/' color='#FF9427' acction={btnDivide}/>
      </View>

         {/* fila de botones < */}
         <View style={styles.styleRow}>
          <ButtonCalc text='7'  acction={ numerAppend }/>
          <ButtonCalc text='8'  acction={ numerAppend }/>
          <ButtonCalc text='9'  acction={ numerAppend }/>
          <ButtonCalc text='X' color='#FF9427' acction={btnMultiply}/>
      </View>

           {/* fila de botones < */}
           <View style={styles.styleRow}>
          <ButtonCalc text='4' acction={numerAppend}  />
          <ButtonCalc text='5' acction={numerAppend}  />
          <ButtonCalc text='6' acction={numerAppend}  />
          <ButtonCalc text='-' color='#FF9427'acction={btnRest}/>
      </View>


         {/* fila de botones < */}
         <View style={styles.styleRow}>
          <ButtonCalc text='1'  acction={numerAppend}/>
          <ButtonCalc text='2'  acction={numerAppend}/>
          <ButtonCalc text='3'  acction={numerAppend}/>
          <ButtonCalc text='+' color='#FF9427' acction={btnSum}/>
      </View>

        {/* fila de botones < */}
        <View style={styles.styleRow}>
          <ButtonCalc text='0' acction={numerAppend} large/>
          <ButtonCalc text='.' acction={numerAppend}  />
          <ButtonCalc text='=' color='#FF9427' acction={ calculation }/>
      </View>


    </View>
  )
}