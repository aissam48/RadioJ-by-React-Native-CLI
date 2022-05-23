import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


import Videos from './VideosScreens/Videos';
import Watch from './VideosScreens/Watch';


const VideosStack = ()=>{
    return(

        <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name="Videos" component={Videos} options={{headerShown: false}} />
                    <Stack.Screen name="Watch" component={Watch} options={{headerShown: false}} />
                </Stack.Navigator>
        </NavigationContainer>
    )
}

export default VideosStack