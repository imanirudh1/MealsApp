import React from 'react';
import {Text,StyleSheet,ImageBackground,View,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native';
const MealItem=props => {
 
    return(<View style={styles.container}>
        <TouchableOpacity  onPress={props.onSelect}>
          <View>
            <View style={{...styles.row,...styles.header}}>
              <ImageBackground source={{uri:props.img}} style={styles.img} >
          <Text style={styles.title} numberOfLines={1} >{props.title}</Text>
          </ImageBackground>
            </View>
            <View style={{...styles.row,...styles.details}}>
    <Text>{props.time}</Text>
    <Text>{props.complexcity.toUpperCase()}</Text>
    <Text>{props.affordability.toUpperCase()}</Text>
            </View>
            
            </View></TouchableOpacity></View>
    )
}

const styles=StyleSheet.create({
    container: {
        
        height:200,
        width:'100%',
        borderRadius:15,
        overflow:'hidden',
        backgroundColor:'#ccc',
        
      },
      row:{
        flexDirection:'row',
        //justifyContent:'space-between',
      },
      details:{
            justifyContent:'space-between',
            paddingHorizontal:10,
            backgroundColor:'#ccc',
            fontFamily:'open-sans'
      },
      img:{
          height:'100%',
          width:'100%',
          justifyContent:'flex-end',
      },header:{
          height:'90%'
      },
      title:{
         backgroundColor:'rgba(0,0,0,0.6)',
         color:'white',
         fontFamily:'open-sans-bold',
         paddingHorizontal:12,
         paddingVertical:5,
         fontSize:20,
         textAlign:'center'
         //alignItems:'flex-end'
      }
      
});
export default MealItem;