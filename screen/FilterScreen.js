import React, { useState, useEffect, useCallback } from 'react';
import DefaultText from '../components/DefaultText';
import {Text,View,StyleSheet,Switch} from 'react-native';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
const FilterSwitch=props => {
 return(
        <View style={styles.row}>
        <DefaultText>{props.lable}</DefaultText>
        <Switch 
        value={props.state}
         onValueChange={props.onChange} 
         thumbColor='purple'
         trackColor={{true:'purple'}}
         />
        </View>
        
      )
}
const FilterScreen=props => {
  const { navigation }=props;
  const SaveFilters=useCallback(() => {
    const AppliedFilter={
      Gluten:isGluten,
      Lactos:isLactos,
      Vegan:isVegan,
      Vegiterian:isVegiterian
    }
    console.log(AppliedFilter);
  },[isGluten,isLactos,isVegan,isVegiterian]);

   useEffect(() => {
     navigation.setParams({save:SaveFilters})
   },[SaveFilters]);

  const [isGluten,setGluten]=useState(false);
  const [isLactos,setLactos]=useState(false);
  const [isVegan,setVegan]=useState(false);
  const [isVegiterian,setVegiterian]=useState(false);
    return (<View style={styles.screen}>
        <Text style={styles.container}>Available Filters/Restriction</Text>
        <FilterSwitch 
        lable='Gluten-free'
         state={isGluten}
          onChange={newValue => setGluten(newValue)} />
          <FilterSwitch 
        lable='Lactos-free'
         state={isLactos}
          onChange={newValue => setLactos(newValue)} />
          <FilterSwitch 
        lable='Vegan'
         state={isVegan}
          onChange={newValue => setVegan(newValue)} />
          <FilterSwitch 
        lable='Vegiterian'
         state={isVegiterian}
          onChange={newValue => setVegiterian(newValue)} />
          </View>
    )
};

FilterScreen.navigationOptions=navdata => {
 return{ headerTitle:'Filter Screen',
  headerRight:() => {
    return(
      <HeaderButtons HeaderButtonComponent={HeaderButton} >
          <Item iconName='ios-save'
          title='save'
          color='white'
          onPress={
            navdata.navigation.getParam('save')
          } />
      </HeaderButtons>
    )
  },
  headerLeft:() => {
    return(<HeaderButtons HeaderButtonComponent={HeaderButton} >
      <Item
        title='Fav Button'
        iconName='ios-menu'
        color='white'
        onPress={() => {navdata.navigation.toggleDrawer()}}
      />
    </HeaderButtons>)
  },
  headerStyle:{
    backgroundColor: Platform.OS ==='android' ? 'black' : 'pink' ,
  },
  headerTintColor: Platform.OS ==='android' ? 'white' : 'red'
}};

const styles = StyleSheet.create({
    container: {
      //textAlign:'center',
      fontFamily:'open-sans-bold',
      fontSize:20,
      margin:10
    },
    row:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:'80%',margin:10
    },
    screen:{
      flex:1,
      alignItems:'center'
    }
  });
export default FilterScreen;