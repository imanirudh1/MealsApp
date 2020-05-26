import React from 'react';
import {Text,TouchableNativeFeedback,View,TouchableOpacity,StyleSheet, Platform} from 'react-native';

const GridItem=props => {

    let Touchableop=TouchableOpacity;
    if(Platform.OS ==='android' && Platform.Version >= 21){
        Touchableop=TouchableNativeFeedback;
    }
    return <View style={styles.gridItem}>
    <Touchableop style={{flex:1}}  onPress={props.onSelect} >
        <View style={{...styles.container,...{backgroundColor:props.color}}} >
          <Text style={styles.title} >{props.title}</Text>
        </View></Touchableop></View> 
};

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:'hidden',
elevation:6
      },
      container:{
          padding:15,
flex:1,
justifyContent:'flex-end',
alignItems:'flex-end',
borderRadius:10
      },
      title:{
          fontFamily:'open-sans-bold',
          fontSize:20,
          textAlign:'right'
      }
});

export default GridItem;