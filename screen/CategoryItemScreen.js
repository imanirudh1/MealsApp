import React from 'react';
import {CATEGORIES,MEALS} from '../data/dummy-data.js';
import MealList from '../components/MealList.js';

const CategoryItemScreen=props => {
  const catId=props.navigation.getParam('categoryId');
 //const selectedCategory=CATEGORIES.find(cat => cat.id === catId);
  const displayMeal=MEALS.filter(meals => meals.categoryId.indexOf(catId)>=0)
    return (
      <MealList navigation={props.navigation} listData={displayMeal} />
    )
};
CategoryItemScreen.navigationOptions = navigationData => {
  const catId=navigationData.navigation.getParam('categoryId');
  const selectedCategory=CATEGORIES.find(cat => cat.id === catId);
  return { 
    headerTitle:selectedCategory.title
  }
};

export default CategoryItemScreen;