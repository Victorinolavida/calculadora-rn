import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
      flex:1,
      backgroundColor:'black',
      paddingHorizontal:20,
    },
    calculatorContainer:{
      paddingHorizontal:20,
      flex:1,
      justifyContent:'flex-end'

    },
    preResult:{
      fontSize:30,
      color:'#666',
      textAlign:'right'
    },
    result:{
      fontSize:60,
      color:'white',
      textAlign:'right',
      marginBottom:12
    },
    button:{
      height:80,
      width:80,
      // backgroundColor:"#333",
      // backgroundColor:"#2D2D2D",
      borderRadius:300,
      justifyContent:'center',
      marginHorizontal:10

    },
    buttonText:{
      textAlign:'center',
      padding:10,
      fontSize:30,
      color:"white",
      fontWeight:'300'
    },
    styleRow:{
      flexDirection:'row',
      justifyContent:'center',
      marginBottom:18,
      paddingHorizontal:10
    }
});


//#2D2D2D
//#FF9427