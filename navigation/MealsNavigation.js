import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native'
import CategoryItemScreen from '../screen/CategoryItemScreen';
import CategoryScreen from '../screen/CategoryScreen';
import FavoriteScreen from '../screen/FavoriteScreen';
import MealDetail from '../screen/MealDetail';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const MealNavigation=createStackNavigator(
    {
        Category:CategoryScreen,
        MealDiscription:MealDetail,
        CategoryItem:CategoryItemScreen,
        //Fav:FavoriteScreen
    },{
        initialRouteName:'Category' ,
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: Platform.OS ==='android' ? 'purple' : 'pink' ,
              },
              headerTintColor: Platform.OS ==='android' ? 'white' : 'red'
        }
    }, 
    
);
const tabconfig={
    Meals:{screen:MealNavigation,navigationOptions:{
        tabBarLabel:'All Meals',
        tabBarIcon:(tabinfo) => {
            return(
                <Ionicons name='ios-restaurant' size={25} color={tabinfo.tintColor} />
            )
        },
        tabBarColor:'purple'
    }},
    Favorite:{screen:FavoriteScreen,navigationOptions:{
        tabBarLabel:'Favorites',
        tabBarIcon:(tabinfo) => {
            return(
                <Ionicons name='ios-star' size={25} color={tabinfo.tintColor} />
            )
        },
        tabBarColor:'orange'
    }}
};
const MealsFavTab=Platform.OS ==='android' ? createMaterialBottomTabNavigator(tabconfig
    ,{
        activeTintColor:'white',
        shifting:true
    }) : 
    createBottomTabNavigator(tabconfig,
{
    tabBarOptions:{
        activeTintColor:'white'
    }
}
)

export default createAppContainer(MealsFavTab);