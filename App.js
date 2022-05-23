import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import notifee from '@notifee/react-native';
import TrackPlayer, {Capability} from 'react-native-track-player';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, ToastAndroid} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector } from 'react-redux';




function radioState(state = { isPlaying: "Empty" }, action) {
  switch (action.type) {
      case 'startRadio': {
          return ({
              ...state,
              isPlaying: action.data
          })
      }
      case 'stopRadio': {
          return ({
              ...state,
              isPlaying: action.data
          })
      }
      default: {
          return ({
              ...state,
              isPlaying: "Empty"
          })
      }
  }
}

const store = createStore(combineReducers({ radioState }))

const Stack = createNativeStackNavigator()

import Tabs from './TabsNavigation/Tabs';
import SplachScreen from './SplachScreen'

const App = () => {


  useEffect(()=>{

    async function SetUp(){
      await TrackPlayer.setupPlayer()
    }

    SetUp()

    return async ()=> await TrackPlayer.destroy()
  }, [])

  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="SplachScreen" component={SplachScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};


export default App;
