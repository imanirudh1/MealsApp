import React, { useState } from 'react';
import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo'
import MealsNavigation from './navigation/MealsNavigation'
import {enableScreens} from 'react-native-screens';
enableScreens();
const fetchFonts=() => {
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App() {
 const [fontLoaded,setFontLoad]=useState(false);
 if(!fontLoaded){
   return(
   <AppLoading 
   startAsync={fetchFonts} 
   onFinish={() => setFontLoad(true)}
    /> 
    )
 }
  return (
   <View style={styles.container}>
    <StatusBar barStyle='light-content' translucent backgroundColor="rgba(0,0,0,0.0)" />
    <MealsNavigation /></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
