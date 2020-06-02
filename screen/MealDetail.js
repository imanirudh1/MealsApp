import React from 'react';
import {Text,View,StyleSheet, Button,Image,ScrollView} from 'react-native';
import { MEALS } from '../data/dummy-data.js';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
const MealDetail=props => {
  const catID=props.navigation.getParam('mealId');
  const selectedId=MEALS.find(cat => cat.id===catID);
    return (
      <ScrollView>
    <Image source={{uri:selectedId.imgUrl}} style={styles.image} />
    <View style={{...styles.row,...styles.details}}>
    <DefaultText>{selectedId.duration}</DefaultText>
    <DefaultText>{selectedId.complexity.toUpperCase()}</DefaultText>
    <DefaultText>{selectedId.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={{fontFamily:'open-sans-bold',textAlign:'center',fontSize:20}} >Ingredients</Text>
            <View style={styles.ingrident} >{selectedId.ingridents.map((ingrident) => 
              <View key={ingrident} style={styles.items}><Text style={styles.text}>{ingrident}</Text></View>
            )}</View>
            <Text style={{fontFamily:'open-sans-bold',textAlign:'center',fontSize:20}} >Steps</Text>
            <View style={styles.ingrident} >{selectedId.steps.map((step) => 
              <View key={step} style={styles.items}><Text style={styles.text}>{step}</Text></View>
            )}</View>
            </ScrollView>
    )
};

MealDetail.navigationOptions=navigationData => {
  const catID=navigationData.navigation.getParam('mealId');
  const selectedId=MEALS.find(cat => cat.id==catID);
  return{
headerTitle:selectedId.title,
headerRight:() => {
  return(<HeaderButtons HeaderButtonComponent={HeaderButton} >
    <Item
      title='Fav Button'
      iconName='ios-star-outline'
      onPress={() => console.log('pressed')}
    />
  </HeaderButtons>)
}
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      height:200,
      width:'100%'
    },
    row:{
      flexDirection:'row',
      //justifyContent:'space-between',
    },
    details:{
          justifyContent:'space-around',
          padding:15,
          // backgroundColor:'#ccc',
          fontFamily:'open-sans',
        
    },
    ingrident:{
      margin:10
    },
    items:{
      borderWidth:1,
      margin:2,
      padding:5
    },text:{
      fontFamily:'open-sans',
      fontSize:15
    }
  });
export default MealDetail;