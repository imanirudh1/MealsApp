import React from 'react';
import {StyleSheet,View,FlatList} from 'react-native';
//import { CATEGORIES } from '../data/dummy-data.js';
import MealItem from './MealItem.js';

const MealList= props => {
    return(
<View style={styles.screen}>
        <FlatList
        data={props.listData}
        renderItem={({item}) => {
          return(
            <MealItem 
            title={item.title} 
            img={item.imgUrl} 
            affordability={item.affordability}
            complexcity={item.complexity}
            time={item.duration}
            style={{width:'100%'}}
            onSelect={() => {
              props.navigation.navigate({routeName:'MealDiscription',params:{mealId:item.id}})
            }}
            />
          )
        }}
        /></View>)
};
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:15
        
      }
});
export default MealList;