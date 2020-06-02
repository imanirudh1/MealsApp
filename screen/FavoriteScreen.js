import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data.js';
const FavoriteScreen=props => {
  const displayData=MEALS.filter(meals => meals.id === 'm1' || meals.id === 'm2')
    return (
        <MealList listData={displayData} navigation={props.navigation} />
    )
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default FavoriteScreen;