import React from 'react';
import {View,StyleSheet,FlatList} from 'react-native';
import {CATEGORIES,MEALS} from '../data/dummy-data.js';
import MealItem from '../components/MealItem.js';



const CategoryItemScreen=props => {
  const catId=props.navigation.getParam('categoryId');
 // const selectedCategory=CATEGORIES.find(cat => cat.id === catId);
  const displayMeal=MEALS.filter(meals => meals.categoryId.indexOf(catId)>=0)
    return (<View style={styles.screen}>
        <FlatList
        data={displayMeal}
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
        /></View>
    )
};
CategoryItemScreen.navigationOptions = navigationData => {
  const catId=navigationData.navigation.getParam('categoryId');
  const selectedCategory=CATEGORIES.find(cat => cat.id === catId);
  return { 
    headerTitle:selectedCategory.title
  }
};

const styles = StyleSheet.create({
   screen:{
     flex:1
   }
  });
export default CategoryItemScreen;