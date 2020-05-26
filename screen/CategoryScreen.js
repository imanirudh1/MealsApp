import React from 'react';
import {Text,View,StyleSheet, Button,FlatList,TouchableOpacity, Platform} from 'react-native';
import {CATEGORIES} from '../data/dummy-data.js'
import GridItem from '../components/GridItem.js';
const CategoryScreen=props => {
    return (
        <FlatList 
        numColumns={2}
        data={CATEGORIES}
        renderItem={({item}) => {
          return(
            <GridItem onSelect={() => {
              props.navigation.navigate({routeName:'CategoryItem',params:{
                categoryId:item.id
              }});
            }} 
            title={item.title}
            color={item.color}
            
            />
          )
        }}
        />
    );
};

CategoryScreen.navigationOptions={
headerTitle:'Meal Category',
  headerStyle:{
  backgroundColor: Platform.OS ==='android' ? 'purple' : 'pink' ,
},
headerTintColor: Platform.OS ==='android' ? 'white' : 'red'
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin:10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });
export default CategoryScreen;