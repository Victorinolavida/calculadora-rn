import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'

interface Props{
  text:string;
  color?:string;
  large?:boolean;
  acction:(numberText:string)=>void
}

export default function ButtonCalc({text,color='#2D2D2D',large=false,acction}:Props) {
  return (
      <TouchableOpacity
        onPress={()=>acction(text)}
      >
         <View style={{
           ...styles.button,
           backgroundColor:color,
           width: large ? 180:80
         }}>
            {/* BUTONS */}
          <Text style={{
            ...styles.buttonText,
            color: (color === '#9B9B9B') ? 'black': 'white',
            
            }}>
            {   text    }
          </Text>
        </View>
      </TouchableOpacity>

  )
}