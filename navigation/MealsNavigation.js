import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform, View,Text,Image,StyleSheet} from 'react-native'
import CategoryItemScreen from '../screen/CategoryItemScreen';
import CategoryScreen from '../screen/CategoryScreen';
import FilterScreen from '../screen/FilterScreen'
import FavoriteScreen from '../screen/FavoriteScreen';
import MealDetail from '../screen/MealDetail';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createDrawerNavigator,DrawerNavigatorItems} from 'react-navigation-drawer'
const FavNavigation=createStackNavigator(
    {
        Favorite:FavoriteScreen,
        MealDiscription:MealDetail
    },
    {
        initialRouteName:'Favorite',
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: Platform.OS ==='android' ? 'orange' : 'pink' ,
              },
              headerTintColor: Platform.OS ==='android' ? 'white' : 'red',
              headerTitle:'ScreenA'
        }
    }
)
const MealNavigation=createStackNavigator(
    {
        Category:CategoryScreen,
        MealDiscription:MealDetail,
        CategoryItem:CategoryItemScreen,
      
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
        tabBarColor:'black'
    }},
    Favorite:{screen:FavNavigation,navigationOptions:{
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
const FilterNav=createStackNavigator(
    {
        Filter:FilterScreen
    }
);
const CustomNav=props => {
    return(
        <View style={styles.screen} >
            <View style={styles.profile}>
            <View style={styles.imgb}><Image resizeMode='center' source={require('../assets/ab.jpg')} style={styles.image} /></View>
            <Text style={{fontFamily:'open-sans-bold',marginTop:10,paddingLeft:50,color:'white'}} >Anirudh</Text>

            </View>
            <DrawerNavigatorItems {...props} /> 
        </View>
    )
}
const styles=StyleSheet.create({
    profile:{
        flexDirection:'row',
        marginTop:30,
       //justifyContent:'space-around'
       // overflow:'hidden'
    },
    image:{
        height:100,
        width:100,
        borderRadius:30
    },
    imgb:{
        borderRadius:50,
        overflow:'hidden',
        borderColor:'orange',
        borderWidth:2
    },
    screen:{
        //margin:10,
        flex:1,
        backgroundColor:'black'
    }
})

const MainNav=createDrawerNavigator(
    {
        Home:{screen:MealsFavTab,navigationOptions:{
            drawerLabel:'Meals',
            color:'white'
        }},
        Filter:FilterNav,
    },
    {   contentComponent:CustomNav,
        contentOptions:{
            activeTintColor:'orange',
            inactiveTintColor:'white'
        }
    }
)

export default createAppContainer(MainNav);