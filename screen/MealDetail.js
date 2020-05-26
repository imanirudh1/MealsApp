import React from 'react';
import {Text,View,StyleSheet, Button} from 'react-native';
import { MEALS } from '../data/dummy-data.js';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
const MealDetail=props => {
  const catID=props.navigation.getParam('mealId');
  const selectedId=MEALS.find(cat => cat.id===catID);
    return (
    <Text>{selectedId.title}</Text>
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
  });
export default MealDetail;